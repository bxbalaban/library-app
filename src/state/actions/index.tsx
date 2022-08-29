import{ActionType} from "../action-types/index"
//actions will look like this (an object)
// {
//     type:string,
//     payload?:number// payload is optionel
// }

interface DepositAction{
    type:ActionType.DEPOSIT
    payload:number
}
interface WithdrawAction{
    type:ActionType.WITHDRAW
    payload:number
}
interface BankruptAction{
    type:ActionType.BANKRUPT
}

export type Action= DepositAction| WithdrawAction| BankruptAction