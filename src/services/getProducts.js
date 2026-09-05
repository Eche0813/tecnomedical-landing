// src/services/getProducts.js

// 1. Reemplaza esta constante con la URL de tu despliegue de Google Apps Script
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzWRF-i8FAUK5HMg_pxTL4G3tundv6MhO9vCwpO7r4olijbXTNeFUOO-cp1eUeciD8t/exec";

// Datos de respaldo (Fallback) en caso de que Google Sheets no responda
const mockProducts = [
  // --- OXIGENOTERAPIA AVANZADA ---
  {
    id: "1",
    title: "Concentrador de Oxígeno Estacionario 5 Litros - Marca Olive",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400",
    available: true,
    category: "Oxigenoterapia Avanzada"
  },
  {
    id: "2",
    title: "Concentrador Portátil de Oxígeno (1-5 L/min con Batería)",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400",
    available: true,
    category: "Oxigenoterapia Avanzada"
  },
  {
    id: "3",
    title: "Oxímetro de Pulso de Alta Precisión Médico",
    price: 120000,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    available: true,
    category: "Oxigenoterapia Avanzada"
  },

  // --- TERAPIA DEL SUEÑO ---
  {
    id: "4",
    title: "Equipo Auto CPAP Automático con Humidificador Térmico",
    price: 2850000,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    available: true,
    category: "Terapia del Sueño"
  },
  {
    id: "5",
    title: "Equipo BiPAP de Presión Binivel con Mascarilla Nasal",
    price: 4900000,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    available: false,
    category: "Terapia del Sueño"
  },
  {
    id: "6",
    title: "Mascarilla Oronasal para CPAP / BiPAP Talla M/L",
    price: 350000,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400",
    available: true,
    category: "Terapia del Sueño"
  }
];

export async function getProducts() {
  // Si no has puesto la URL real de Google Apps Script, retorna el mock directamente
  if (!GOOGLE_SHEET_API || GOOGLE_SHEET_API.includes("TU_SCRIPT_ID")) {
    return mockProducts;
  }

  try {
    const response = await fetch(GOOGLE_SHEET_API);
    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    
    const data = await response.json();

    // Aseguramos que los precios sean numéricos y 'available' un booleano
    return data.map(item => ({
      ...item,
      price: Number(item.price) || 0,
      available: typeof item.available === 'boolean' ? item.available : String(item.available).toUpperCase() === 'TRUE'
    }));

  } catch (error) {
    console.warn("No se pudo conectar con Google Sheets, usando productos de prueba:", error);
    return mockProducts;
  }
}