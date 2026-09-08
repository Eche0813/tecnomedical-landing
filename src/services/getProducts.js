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
 * @property {string} id - Identificador único del producto.
 * @property {string} title - Nombre o título comercial del equipo/servicio.
 * @property {number} price - Precio unitario del producto en Pesos Colombianos (COP).
 * @property {string} image - URL accesible de la imagen del producto.
 * @property {boolean} available - Estado de disponibilidad e inventario actual.
 * @property {string} category - Categoría a la que pertenece (ej. Oxigenoterapia, Terapia del Sueño).
 */

/**
 * Obtiene el catálogo de productos actualizado desde Google Sheets.
 * 
 * Utiliza `{ cache: 'no-store' }` para evitar la memoria caché en SSR (Vercel)
 * y garantizar que las actualizaciones en la hoja de cálculo se reflejen en vivo.
 * Además, normaliza los tipos de datos (precios a tipo Number y disponibilidad a Boolean).
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

    // Normalización de tipos de datos recibidos desde la hoja de cálculo
    return data.map(item => ({
      ...item,
      price: Number(item.price) || 0,
      available: typeof item.available === 'boolean' 
        ? item.available 
        : String(item.available).toUpperCase() === 'TRUE'
    }));

  } catch (error) {
    console.error("[getProducts Service Error]:", error);
    return []; // Fallback seguro para evitar errores de renderizado en la UI
  }
}