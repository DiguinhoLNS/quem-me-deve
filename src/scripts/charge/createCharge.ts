import uuid from 'react-native-uuid'

import { resetNewCharge, setNewCharges } from "../../redux/reducers/charges/chargesReducer"

import getMouthName from '../../utils/getMouthName'

export default function createCharge(dispatch: Function){

    const date = new Date()
    const createdDate = `${date.getDate()} de ${getMouthName(date.getMonth())} de ${date.getFullYear()}`

    const MOCK_CREATEDDATE = '01 de Jan de 2022'

    try {
        dispatch(setNewCharges({id: uuid.v4().toString(), day: createdDate, time: new Date().toLocaleTimeString()}))

        dispatch(resetNewCharge())
    } catch (error) {
        console.log(error)
    }

}