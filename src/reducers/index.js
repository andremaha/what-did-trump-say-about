import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import QutesReducer from './reducer_quotes'
import GifsReducer from './reducer_gifs'

const rootReducer = combineReducers({
  quotes: QutesReducer,
  gifs: GifsReducer,
  form: formReducer
});

export default rootReducer;
