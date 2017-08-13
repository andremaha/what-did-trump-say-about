import axios from 'axios'

export const FETCH_QUOTES = 'fetch_quotes'
export const FETCH_GIFS = 'fetch_gifs'

const TRUMP_ROOT_URL = 'https://tronaltdumb.herokuapp.com/search/quote?query='
const GIPHY_ROOT_URL = 'https://api.giphy.com/v1/gifs/search?api_key=5bb29a490fdd40959cea0b551b6725fb&q='

export function fetchQuotes(query) {

  const request = axios.get(`${TRUMP_ROOT_URL}${query}`)

  return {
    type: FETCH_QUOTES,
    payload: request
  }
}

export function fetchGifs(query) {

  const request = axios.get(`${GIPHY_ROOT_URL}${query}`)

  return {
    type: FETCH_GIFS,
    payload: request
  }
}