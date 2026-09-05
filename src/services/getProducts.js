// src/services/getProducts.js

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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 50);
  });
}