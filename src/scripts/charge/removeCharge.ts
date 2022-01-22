import { deleteCharge } from "../../redux/reducers/charges/chargesReducer"

export default function removeCharge(dispatch: Function, id: string){

    try {
        dispatch(deleteCharge(id))
    } catch (error) {
        console.log(error)
    }

}