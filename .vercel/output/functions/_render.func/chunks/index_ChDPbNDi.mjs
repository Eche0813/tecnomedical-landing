import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, x as unescapeHTML } from "./server_CQ5qcR5n.mjs";
import { t as createComponent } from "./compiler_BHI_0Dqx.mjs";
import { t as $$Layout } from "./Layout_BTGteNAJ.mjs";
import { n as $$WhatsappButton, r as $$ProductGrid, t as getProducts } from "./getProducts_rlwq6I8F.mjs";
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-gradient-to-b from-[#0082C3]/5 to-slate-50 py-12 lg:py-20 overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"><!-- Contenido Principal (Texto & CTAs) --><div class="lg:col-span-7 text-center lg:text-left"><span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0082C3]/10 text-[#0082C3] border border-[#0082C3]/20 mb-6"><span class="w-2 h-2 rounded-full bg-[#0082C3] animate-pulse"></span>Atención y Venta Directa a Toda Colombia</span><h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003B73] tracking-tight leading-tight">Te ayudamos a cuidar de quienes más amas con <span class="text-[#0082C3]">soluciones respiratorias confiables</span></h1><p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">Especialistas en oxigenación portátil, concentradores de oxígeno, equipos CPAP y accesorios para oxigenoterapia. Recibe asesoría especializada, humana y personalizada para elegir el equipo adecuado según tu fórmula médica y tus necesidades.</p><!-- Botones de Acción --><div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"><a href="/catalogo" class="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-[#0082C3] hover:bg-[#003B73] transition-all shadow-lg shadow-[#0082C3]/25">Ver Catálogo de Equipos</a><a href="https://wa.me/573504990664?text=Hola%20Tecnomedical,%20necesito%20asesor%C3%ADa%20para%20un%20equipo%20m%C3%A9dico" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-[#0082C3]/40 transition shadow-sm gap-2"><svg class="w-5 h-5 text-emerald-600 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path></svg>Hablar con un Asesor</a></div></div><!-- Imagen Destacada --><div class="lg:col-span-5 flex justify-center items-center"><div class="relative w-60 max-w-md"><!-- Resplandor decorativo de fondo en el gradiente de la marca --><div class="absolute -inset-1 bg-gradient-to-r from-[#0082C3] to-[#003B73] rounded-2xl blur opacity-25"></div><!-- Contenedor con encuadre ajustado --><div class="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-100 overflow-hidden"><div class="w-full h-80 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1645273474709-8494fe503625?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Equipo médico de soporte respiratorio en hogar" class="w-full h-full object-contain object-center rounded-xl hover:scale-105 transition-transform duration-500" loading="eager"></div></div></div></div></div></div></section>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/HowItWorks.astro
var $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-16 bg-white border-b border-slate-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center max-w-2xl mx-auto mb-12"><h2 class="text-2xl sm:text-3xl font-extrabold text-[#003B73] tracking-tight">¿Cómo adquirir tu equipo en 3 pasos?</h2><p class="text-slate-600 text-sm sm:text-base mt-2">Un proceso transparente, rápido y sin complicaciones administrativas.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">${[
		{
			step: "01",
			title: "Cuéntanos ¿Qué necesitas?",
			description: "Explora nuestro catálogo o comunícate con nosotros. Compártenos tu fórmula o indicación médica para conocer tus necesidades."
		},
		{
			step: "02",
			title: "Recibe Asesoría & Cotización",
			description: "Te ayudamos a identificar el equipo adecuado, verificamos su disponibilidad y te presentamos una cotización clara con las opciones de entrega."
		},
		{
			step: "03",
			title: "Recibe tu equipo & Acompañamiento",
			description: "Si te encuentras en Medellín o municipios cercanos entregamos el equipo en la puerta de tu casa, resolvemos todas tus dudas y te enseñamos a utilizarlo y cuidarlo correctamente. Además, cuentas con nuestro respaldo y soporte posventa."
		}
	].map((item) => renderTemplate`<div class="relative bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#0082C3]/40 transition-colors"><div><span class="text-4xl font-extrabold text-[#0082C3]/30 block mb-2">${item.step}</span><h3 class="text-lg font-bold text-[#003B73] mb-2">${item.title}</h3><p class="text-slate-600 text-sm leading-relaxed">${item.description}</p></div></div>`)}</div></div></section>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/HowItWorks.astro", void 0);
//#endregion
//#region src/components/TrustBadges.astro
var $$TrustBadges = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="nosotros" class="py-20 bg-gradient-to-b from-[#003B73] via-slate-900 to-[#003B73] text-white relative overflow-hidden"><div class="absolute top-0 left-1/4 w-96 h-96 bg-[#0082C3]/15 rounded-full blur-3xl pointer-events-none"></div><div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0082C3]/10 rounded-full blur-3xl pointer-events-none"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="text-center max-w-3xl mx-auto mb-16"><span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0082C3]/20 text-[#0082C3] border border-[#0082C3]/30 mb-4">¿Por qué confiar en Tecnomedicals?</span><h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">Más que equipos, brindamos <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0082C3] to-teal-300">tranquilidad y respaldo a tu hogar.</span></h2><p class="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">Sabemos que cuando se trata de salud respiratoria, contar con acompañamiento oportuno marca la diferencia. Por eso, nuestro servicio se basa en cuatro pilares pensados para cuidarte a ti y a tu familia.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8">${[
		{
			title: "Asesoría Técnica Especializada",
			description: "Revisamos la fórmula emitida por tu especialista y te orientamos para identificar el equipo compatible con el flujo de oxígeno o la presión CPAP indicada.",
			badge: "Atención Personalizada",
			gradient: "from-[#0082C3] to-[#003B73]",
			icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>`
		},
		{
			title: "Equipos Originales y Respaldados",
			description: "Como importadores directos, ofrecemos equipos originales, garantía y respaldo posventa. Nuestros productos cuentan con la documentación sanitaria aplicable para su comercialización en Colombia.",
			badge: "Compra Segura",
			gradient: "from-[#0082C3] to-teal-600",
			icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
		},
		{
			title: "Envíos Seguros a Nivel Nacional",
			description: "Despachamos tu equipo con embalaje seguro y guía de seguimiento hasta tu ciudad. Si te encuentras en Medellín, lo entregamos en la puerta de tu casa y te enseñamos a utilizarlo correctamente.",
			badge: "Cobertura Nacional",
			gradient: "from-[#0082C3] to-[#003B73]",
			icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
		},
		{
			title: "Acompañamiento Posventa",
			description: "Te acompañamos en la puesta en marcha del equipo y te orientamos sobre su uso, configuración y cuidado, para que tú y tu familia se sientan seguros.",
			badge: "Estamos Para Ayudarte",
			gradient: "from-[#003B73] to-[#0082C3]",
			icon: `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
		}
	].map((pillar) => renderTemplate`<div class="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#0082C3]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"><div><div class="flex items-center justify-between mb-6"><div${addAttribute(`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg shadow-[#0082C3]/20 group-hover:scale-110 transition-transform duration-300`, "class")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(pillar.icon)}` })}</div><span class="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#0082C3] border border-white/10">${pillar.badge}</span></div><h3 class="text-xl font-bold text-white mb-3 group-hover:text-[#0082C3] transition-colors">${pillar.title}</h3><p class="text-slate-300 text-sm leading-relaxed">${pillar.description}</p></div><div class="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-medium text-[#0082C3] gap-1"><span>Servicio verificado</span><svg class="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div></div>`)}</div></div></section>`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/components/TrustBadges.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const featuredProducts = (await getProducts()).filter((p) => p.available).slice(0, 3);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TECNOMEDICALS S.A.S. | Equipos de Oxigenoterapia y Salud en Casa" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "HowItWorks", $$HowItWorks, {})}${renderComponent($$result, "TrustBadges", $$TrustBadges, {})}${maybeRenderHead($$result)}<section class="bg-slate-50 pt-8 pb-4">${renderComponent($$result, "ProductGrid", $$ProductGrid, {
		"products": featuredProducts,
		"showHeader": true,
		"title": "Equipos Respiratorios Destacados",
		"description": "Conoce los equipos más solicitados para soporte respiratorio domiciliario con garantía y entrega a nivel nacional."
	})}</section><div class="text-center pb-16 bg-slate-50"><a href="/catalogo" class="inline-flex items-center justify-center px-6 py-3.5 border-2 border-[#0082C3] text-[#0082C3] hover:bg-[#0082C3] hover:text-white font-bold rounded-xl transition-all shadow-xs gap-2">Ver Catálogo Completo &rarr;</a></div>${renderComponent($$result, "WhatsappButton", $$WhatsappButton, {})}` })}`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/pages/index.astro", void 0);
var $$file = "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
