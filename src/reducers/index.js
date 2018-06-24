import { combineReducers } from 'redux'

import search from './search'
import detail from './detail'

const rootReducer = combineReducers({
  search,
  detail
})

export default rootReducer
