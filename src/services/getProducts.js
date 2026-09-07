// src/services/getProducts.js

const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzWRF-i8FAUK5HMg_pxTL4G3tundv6MhO9vCwpO7r4olijbXTNeFUOO-cp1eUeciD8t/exec";

export async function getProducts() {
  try {
    const response = await fetch(GOOGLE_SHEET_API, { cache: 'no-store' });
    if (!response.ok) throw new Error("Error al conectar con la base de datos de Google Sheets");
    
    const data = await response.json();

    return data.map(item => ({
      ...item,
      price: Number(item.price) || 0,
      available: typeof item.available === 'boolean' 
        ? item.available 
        : String(item.available).toUpperCase() === 'TRUE'
    }));

  } catch (error) {
    console.error("Error obteniendo productos de Google Sheets:", error);
    return []; // Retorna lista vacía en caso de falla
  }
}