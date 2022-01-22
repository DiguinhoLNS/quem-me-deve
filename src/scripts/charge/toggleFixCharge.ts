import { fixCharge } from "../../redux/reducers/charges/chargesReducer"

export default function toggleFixCharge(dispatch: Function, id: string){

    try {
        dispatch(fixCharge(id))
    } catch (error) {
        console.log(error)
    }

}