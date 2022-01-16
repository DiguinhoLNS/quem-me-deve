import AsyncStorage from "@react-native-async-storage/async-storage"

import themes from "../../../styles/themes"

import { setAppTheme } from "../../../redux/reducers/app/appThemeReducer"

export default async function getTheme(dispatch: Function){

    try {
        const data = await AsyncStorage.getItem('theme')
        const json = data ? JSON.parse(data) : null
        json ? dispatch(setAppTheme(json)) : dispatch(setAppTheme(themes.purple))
    } catch (error) {
        console.log('getAppTheme error',error)
        dispatch(setAppTheme(themes.purple))
    }

}