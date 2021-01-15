import axios from 'axios'
import url from './URL'

export default async (id, edited, jwt) => {
  try {
    const { data } = await axios.put(`${url}/reportes/${id}`, edited, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
