import { writable, derived } from 'svelte/store'

export const reportes = writable([])
export const reportesOrdenados = derived(reportes, value => value.sort((a,b) => b.creado - a.creado))