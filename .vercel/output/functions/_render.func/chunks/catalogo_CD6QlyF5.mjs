import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_CQ5qcR5n.mjs";
import { t as createComponent } from "./compiler_BHI_0Dqx.mjs";
import { t as $$Layout } from "./Layout_BTGteNAJ.mjs";
import { n as $$WhatsappButton, r as $$ProductGrid, t as getProducts } from "./getProducts_rlwq6I8F.mjs";
//#region src/pages/catalogo.astro
var catalogo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Catalogo,
	file: () => $$file,
	url: () => $$url
});
var $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
	const allProducts = await getProducts();
	const oxigenoterapiaProducts = allProducts.filter((p) => p.category === "Oxigenoterapia Avanzada");
	const suenoProducts = allProducts.filter((p) => p.category === "Terapia del Sueño");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Catálogo de Equipos Médicos | TECNOMEDICALS S.A.S.",
		"description": "Catálogo de oxigenoterapia avanzada y equipos de terapia del sueño CPAP/BiPAP con registro INVIMA en Colombia."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="bg-gradient-to-b from-[#003B73] via-slate-900 to-slate-900 text-white py-14"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><span class="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#0082C3]/20 text-[#0082C3] border border-[#0082C3]/30 mb-4 uppercase tracking-wider">Catálogo Especializado</span><h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Equipos de Oxigenoterapia & Terapia del Sueño</h1><p class="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">Explora nuestros equipos homologados con garantía oficial y soporte técnico directo en Colombia.</p><!-- Botones de Salto Rápido a Secciones --><div class="mt-8 flex flex-wrap justify-center gap-3"><a href="#oxigenoterapia" class="px-5 py-2.5 rounded-xl bg-[#0082C3] hover:bg-[#003B73] text-white font-semibold text-sm transition-all shadow-xs flex items-center gap-2"><span>💨</span> Oxigenoterapia Avanzada</a><a href="#terapia-sueno" class="px-5 py-2.5 rounded-xl bg-[#003B73] hover:bg-[#0082C3] text-white font-semibold text-sm transition-all shadow-xs flex items-center gap-2 border border-white/10"><span>🌙</span> Terapia del Sueño (CPAP / BiPAP)</a></div></div></section><main class="bg-slate-50 py-12 space-y-16"><!-- SECCIÓN 1: Oxigenoterapia Avanzada --><section id="oxigenoterapia" class="scroll-mt-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6"><div class="flex items-center gap-3 border-b border-slate-200 pb-4"><div class="w-10 h-10 rounded-xl bg-[#0082C3] text-white flex items-center justify-center font-bold text-xl shadow-xs">💨</div><div><h2 class="text-2xl font-extrabold text-[#003B73]">Oxigenoterapia Avanzada</h2><p class="text-sm text-slate-600">Concentradores estacionarios, portátiles y accesorios respiratorios.</p></div></div></div>${renderComponent($$result, "ProductGrid", $$ProductGrid, { "products": oxigenoterapiaProducts })}</section><!-- SECCIÓN 2: Terapia del Sueño --><section id="terapia-sueno" class="scroll-mt-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6"><div class="flex items-center gap-3 border-b border-slate-200 pb-4"><div class="w-10 h-10 rounded-xl bg-[#003B73] text-white flex items-center justify-center font-bold text-xl shadow-xs">🌙</div><div><h2 class="text-2xl font-extrabold text-[#003B73]">Terapia del Sueño</h2><p class="text-sm text-slate-600">Dispositivos CPAP, BiPAP y mascarillas anatómicas para apnea del sueño.</p></div></div></div>${renderComponent($$result, "ProductGrid", $$ProductGrid, { "products": suenoProducts })}</section></main>${renderComponent($$result, "WhatsappButton", $$WhatsappButton, {})}` })}`;
}, "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/pages/catalogo.astro", void 0);
var $$file = "C:/Users/samue/Documents/Personal/Projects/Tecnomedical-landing/src/pages/catalogo.astro";
var $$url = "/catalogo";
//#endregion
//#region \0virtual:astro:page:src/pages/catalogo@_@astro
var page = () => catalogo_exports;
//#endregion
export { page };
