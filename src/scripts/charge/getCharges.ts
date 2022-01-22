import AsyncStorage from "@react-native-async-storage/async-storage"

import { Charge } from "../../types/charge"

import { setChargesData, setChargesLoading } from "../../redux/reducers/charges/chargesReducer"

export default async function getCharges(dispatch: Function){

    try {
        dispatch(setChargesLoading())

        let charges = await AsyncStorage.getItem('charges')
        let json: Charge[]

        charges ? (
            json = await JSON.parse(charges),
            dispatch(setChargesData(json))
        ) : dispatch(setChargesData([]))
    } catch (error) {
        console.log(error)
        dispatch(setChargesData([]))
    }

}