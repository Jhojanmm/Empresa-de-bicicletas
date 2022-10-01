//------------------------------------------------------------

import axios from 'axios'

const Load = async (state) => {
  const peticion = await axios.get('http://api.citybik.es/v2/networks')
  state(peticion.data.networks)
}

const GetStationById = async (id, state) => {
  const peticion = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
  state(peticion.data.network)

} 




export {
  Load,
  GetStationById
}


