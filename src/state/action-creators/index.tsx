import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action} from "../actions/index"

export const depositMoney=(amount:number)=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}
export const withDrawMoney=(amount:number)=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}
export const bankruptMoney=()=>{
    return(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.BANKRUPT,
        })
    }
}
