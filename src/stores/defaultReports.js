import { writable, derived } from 'svelte/store'
import localReports from '../localReports'
const store = writable([...localReports])

export default store
