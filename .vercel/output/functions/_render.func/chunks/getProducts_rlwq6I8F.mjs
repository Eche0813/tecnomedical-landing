import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, w as createAstro } from "./server_CQ5qcR5n.mjs";
import { t as createComponent } from "./compiler_BHI_0Dqx.mjs";
//#region src/components/ProductCard.astro
createAstro("https://astro.build");
var $$ProductCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductCard;
	const { title, price, image, available, category = "Oxigenoterapia" } = Astro.props;
	const formattedPrice = new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
		maximumFractionDigits: 0
	}).format(price);
	const whatsappUrl = `https://wa.me/573504990664?text=${encodeURIComponent(`Hola Tecnomedical, estoy interesado en recibir información sobre el equipo: ${title}.`)}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#0082C3]/50 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"><div class="p-5"><!-- Categoria & Estado --><div class="flex items-center justify-between mb-3"><span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0082C3]/10 text-[#0082C3] border border-[#0082C3]/20">${category}</span>${available ? renderTemplate`<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Disponible</span>` : renderTemplate`<span class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Agotado</span>`}</div><!-- Imagen del producto --><div class="w-full h-48 bg-slate-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-4 group-hover:bg-[#0082C3]/5 transition-colors duration-300"><img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy"></div><!-- Título y Precio --><h3 class="text-lg font-bold text-[#003B73] line-clamp-2 min-h-[3.5rem] leading-snug">${title}</h3><div class="mt-2"><p class="text-2xl font-extrabold text-[#0082C3] tracking-tight">${formattedPrice}</p></div></div><!-- Botón de Acción --><div class="p-5 pt-0">${available ? renderTemplate`<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 bg-[#0082C3] hover:bg-[#003B73] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path></svg>Consultar por WhatsApp</a>` : renderTemplate`<button disabled class="w-full bg-slate-100 text-slate-400 font-medium py-3 px-4 rounded-xl cursor-not-allowed text-center">Temporalmente Sin Stock</button>`}</div></div>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/ProductCard.astro", void 0);
//#endregion
//#region src/components/ProductGrid.astro
createAstro("https://astro.build");
var $$ProductGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductGrid;
	const { products, showHeader = false, title = "Equipos Respiratorios Destacados", description = "Conoce nuestra selección de concentradores de oxígeno y equipos CPAP para oxigenoterapia y terapia del sueño, con asesoría especializada, garantía y respaldo posventa." } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section id="catalogo" class="py-6"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><!-- Encabezado Opcional -->${showHeader && renderTemplate`<div class="text-center max-w-3xl mx-auto mb-12"><h2 class="text-3xl font-extrabold text-[#003B73] tracking-tight sm:text-4xl">${title}</h2><p class="mt-4 text-slate-600 text-lg leading-relaxed">${description}</p></div>`}<!-- Grilla Responsive -->${products.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, {
		"id": product.id,
		"title": product.title,
		"price": product.price,
		"image": product.image,
		"available": product.available,
		"category": product.category
	})}`)}</div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-2xl border border-slate-200/80 shadow-xs"><p class="text-slate-500 font-medium">No hay productos disponibles en este momento.</p></div>`}</div></section>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/ProductGrid.astro", void 0);
//#endregion
//#region src/components/WhatsappButton.astro
var $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
	const whatsappUrl = `https://wa.me/573504990664?text=${encodeURIComponent("Hola Tecnomedical, desearía consultar sobre la disponibilidad y asesoría de equipos médicos.")}`;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group" aria-label="Contactar por WhatsApp"><svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path></svg><!-- Tooltip flotante en hover --><span class="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">¿Necesitas ayuda? Escríbenos</span></a>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/WhatsappButton.astro", void 0);
//#endregion
//#region src/services/getProducts.js
var GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzWRF-i8FAUK5HMg_pxTL4G3tundv6MhO9vCwpO7r4olijbXTNeFUOO-cp1eUeciD8t/exec";
async function getProducts() {
	try {
		const response = await fetch(GOOGLE_SHEET_API, { cache: "no-store" });
		if (!response.ok) throw new Error("Error al conectar con la base de datos de Google Sheets");
		return (await response.json()).map((item) => ({
			...item,
			price: Number(item.price) || 0,
			available: typeof item.available === "boolean" ? item.available : String(item.available).toUpperCase() === "TRUE"
		}));
	} catch (error) {
		console.error("Error obteniendo productos de Google Sheets:", error);
		return [];
	}
}
//#endregion
export { $$WhatsappButton as n, $$ProductGrid as r, getProducts as t };
