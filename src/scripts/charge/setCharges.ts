import AsyncStorage from "@react-native-async-storage/async-storage"

import { Charge } from "../../types/charge"

export default async function setCharges(charges: Charge[]){

    try {
        await AsyncStorage.setItem('charges', JSON.stringify(charges))
    } catch (error) {
        console.log(error)
    }

}