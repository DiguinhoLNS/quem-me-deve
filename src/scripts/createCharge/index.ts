import uuid from 'react-native-uuid'

import { resetNewCharge, setNewCharges } from "../../redux/reducers/charges/chargesReducer"

export default function createCharge(dispatch: Function){

    try {
        dispatch(setNewCharges({id: uuid.v4().toString(), day: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()}))

        dispatch(resetNewCharge())
    } catch (error) {
        console.log(error)
    }

}