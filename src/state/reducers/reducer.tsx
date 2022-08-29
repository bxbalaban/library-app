import {Action} from "../actions/index"
import {ActionType} from "../action-types/index"

//reducer
//with redux we always should have an initial state
const initialState=0; 


const reducer = (state: number=initialState, action:Action) => {
    //our state will always be a number
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state -  action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
             return state;
    }
}

export default reducer