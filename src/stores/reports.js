import { writable, derived } from 'svelte/store'
import getReports from '../strapi/getReports'

let store = writable([], () => {
  setReports()
  return () => {}
})

async function setReports() {
  let reportes = await getReports()
  reportes.reverse()
  if (reportes) {
    store.set(reportes)
  }
}

export default store
