import axios from 'axios'
import url from './URL'

export default async () => {
  const user = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, jwt: null }

  try {
    const { data } = await axios.get(`${url}/reportes`, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
