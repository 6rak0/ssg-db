import {writable, derived} from "/web_modules/svelte/store.js";
export const reportes = writable([]);
export const reportesOrdenados = derived(reportes, (value) => value.sort((a, b) => b.creado - a.creado));
