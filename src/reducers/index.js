/*-----------
This file combines all reducers
Then Exports those reducers
--------*/
import { combineReducers } from "redux"

import color from './color'

//import user from "./userReducer"

export default combineReducers({
  color,
})



//export default mainReducer;
