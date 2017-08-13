import _ from 'lodash'
import { FETCH_GIFS } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {

    case FETCH_GIFS:
      return action.payload.data.data

    default:
      return state
  }

}