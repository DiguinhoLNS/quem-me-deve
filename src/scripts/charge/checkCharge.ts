import { checkCharge as handleCheckCharge } from "../../redux/reducers/charges/chargesReducer"

export default function checkCharge(dispatch: Function, id: string){

    try {
        dispatch(handleCheckCharge(id))
    } catch (error) {
        console.log(error)
    }

}