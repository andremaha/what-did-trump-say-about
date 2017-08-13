import _ from 'lodash'
import { FETCH_QUOTES } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {

    case FETCH_QUOTES:
      return _.mapKeys(action.payload.data._embedded.quotes, 'quote_id')

    default:
      return state
  }

}