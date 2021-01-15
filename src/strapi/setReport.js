import axios from 'axios'
import url from './URL'

export default async (newReport, jwt) => {
  try {
    const { data } = await axios.post(`${url}/reportes`, newReport, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
