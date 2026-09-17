/**
 * @fileoverview Servicio de consulta a Google Sheets con reintentos automáticos para evitar respuestas vacías en SWR.
 * @module services/getProducts
 */

const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzWRF-i8FAUK5HMg_pxTL4G3tundv6MhO9vCwpO7r4olijbXTNeFUOO-cp1eUeciD8t/exec";

/**
 * Realiza la petición a la API con mecanismo de reintentos
 */
async function fetchWithRetry(url, options, retries = 2, delay = 1000) {
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        // Si responde un arreglo con elementos, la consulta fue exitosa
        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch (err) {
      console.warn(`[getProducts] Intento ${i + 1} fallido. Reintentando...`);
    }

    // Esperar antes del siguiente reintento si no es el último intento
    if (i < retries) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  return null;
}

export async function getProducts() {
  try {
    const rawData = await fetchWithRetry(GOOGLE_SHEET_API, {
      cache: 'no-store',
      redirect: 'follow'
    }, 2, 800); // 2 reintentos con 800ms de espera

    // Si tras los reintentos no hay datos válidos, loguear advertencia
    if (!rawData) {
      console.error("[getProducts Error] Google Apps Script no respondió datos válidos tras reintentos.");
      return [];
    }

    return rawData.map(item => {
      const rawImage = String(item.image || item.imagen || item.image_url || '').trim();

      let imagesArray = rawImage 
        ? rawImage
            .split(',')
            .map(url => url.trim().replace(/^["']|["']$/g, ''))
            .filter(url => url.length > 0)
        : [];

      if (imagesArray.length === 0) {
        imagesArray = [rawImage || '/placeholder.jpg'];
      }

      return {
        ...item,
        title: String(item.title || item.titulo || '').trim(),
        description: String(item.description || item.descripcion || '').trim(),
        category: String(item.category || item.categoria || 'Accesorios').trim(),
        price: Number(item.price) || 0,
        available: typeof item.available === 'boolean' 
          ? item.available 
          : String(item.available).toUpperCase() === 'TRUE',
        image: imagesArray[0],
        images: imagesArray
      };
    });

  } catch (error) {
    console.error("[getProducts Service Error]:", error);
    return []; //Fallback a un arreglo vacío en caso de error
  }
}