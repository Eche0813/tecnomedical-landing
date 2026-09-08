/**
 * @fileoverview Servicio de integración con la API de Google Apps Script.
 * Encargado de consultar y sanitizar el catálogo de productos en tiempo real desde Google Sheets.
 * @module services/getProducts
 */

/**
 * URL pública del endpoint desplegado en Google Apps Script (Web App).
 * @type {string}
 */
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzWRF-i8FAUK5HMg_pxTL4G3tundv6MhO9vCwpO7r4olijbXTNeFUOO-cp1eUeciD8t/exec";

/**
 * Estructura de un producto del catálogo procesado por la aplicación.
 * @typedef {Object} Product
 * @property {string|number} id - Identificador único del producto.
 * @property {string} title - Nombre o título comercial del equipo/servicio.
 * @property {number} price - Precio unitario del producto en Pesos Colombianos (COP).
 * @property {string} image - URL de la imagen principal/portada del producto.
 * @property {string[]} images - Listado completo de URLs de imágenes del producto.
 * @property {boolean} available - Estado de disponibilidad e inventario actual.
 * @property {string} category - Categoría a la que pertenece (ej. Oxigenoterapia, Terapia del Sueño).
 */

/**
 * Obtiene el catálogo de productos actualizado desde Google Sheets.
 * 
 * Utiliza `{ cache: 'no-store' }` para evitar la memoria caché en SSR (Vercel)
 * y garantizar que las actualizaciones en la hoja de cálculo se reflejen en vivo.
 * Además, normaliza los tipos de datos (precios a Number, disponibilidad a Boolean
 * y separa múltiples imágenes divididas por comas en la celda de la hoja).
 * 
 * @async
 * @returns {Promise<Product[]>} Promesa que resuelve al listado de productos o a un arreglo vacío `[]` en caso de fallo.
 */
export async function getProducts() {
  try {
    const response = await fetch(GOOGLE_SHEET_API, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`Error HTTP ${response.status}: No se pudo conectar con la base de datos de Google Sheets`);
    }
    
    const data = await response.json();

    // Normalización de datos y procesamiento de múltiples imágenes
    return data.map(item => {
      // Captura la propiedad image o imagen tal cual viene de la hoja
      const rawImage = String(item.image || item.imagen || item.image_url || '').trim();

      // Separa por comas y elimina comillas simples/dobles o espacios residuales
      let imagesArray = rawImage 
        ? rawImage
            .split(',')
            .map(url => url.trim().replace(/^["']|["']$/g, ''))
            .filter(url => url.length > 0)
        : [];

      // Si no hay imágenes en la lista, usamos la imagen original o la de respaldo
      if (imagesArray.length === 0) {
        imagesArray = [rawImage || '/placeholder.jpg'];
      }

      return {
        ...item,
        price: Number(item.price) || 0,
        available: typeof item.available === 'boolean' 
          ? item.available 
          : String(item.available).toUpperCase() === 'TRUE',
        image: imagesArray[0],  // Primera URL limpia
        images: imagesArray     // Arreglo completo de URLs
      };
    });

  } catch (error) {
    console.error("[getProducts Service Error]:", error);
    return []; // Fallback seguro para evitar errores de renderizado en la UI
  }
}