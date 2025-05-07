

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BhYylu6-.js","_app/immutable/chunks/BBJgEPe-.js","_app/immutable/chunks/B_UksNYh.js","_app/immutable/chunks/zQcNmBbQ.js"];
export const stylesheets = [];
export const fonts = [];
