import Axios from 'axios'

const axios = Axios.create({
  baseURL:'https://blooming-journey-84910.herokuapp.com/api/'
})

export {
  axios
}