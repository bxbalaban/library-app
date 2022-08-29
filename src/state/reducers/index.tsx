import {combineReducers} from "redux"
import Reducer from "./reducer"

const reducers=combineReducers({
    bank:Reducer
});

export default reducers;
export type State = ReturnType< typeof reducers>