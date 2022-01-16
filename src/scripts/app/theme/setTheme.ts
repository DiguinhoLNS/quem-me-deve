import AsyncStorage from "@react-native-async-storage/async-storage"

import { Theme } from "../../../types/theme"

import { setAppTheme } from "../../../redux/reducers/app/appThemeReducer"

export default async function setTheme(dispatch: Function, theme: Theme){

    try {
        await AsyncStorage.setItem('theme', JSON.stringify(theme))
        dispatch(setAppTheme(theme))
    } catch (error) {
        console.log('setAppTheme error',error)
    }

}