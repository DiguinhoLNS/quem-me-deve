import React, { useEffect } from 'react'
import { Provider as ReduxProvider } from "react-redux"
import { NavigationContainer as NavigationProvider } from '@react-navigation/native'
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper'
import SystemNavigationBar from "react-native-system-navigation-bar"

import { Theme } from "react-native-paper/lib/typescript/types"

import store from './redux/store'

import AppRoute from './routes'

const App: React.FC = () => {

    const fontConfig = {
        default: {
            regular: {fontFamily: 'ProductSans-Regular'},
            medium: {fontFamily: 'ProductSans-Medium'},
            light: {fontFamily: 'ProductSans-Regular'},
            thin: {fontFamily: 'ProductSans-LightItalic'},
        },
    }

    const theme: Theme = {
        ...DefaultTheme,
        fonts: configureFonts(fontConfig),
    }

    useEffect(() => {
        (async() => {await SystemNavigationBar.setNavigationColor('#ffffff', false)})()
    }, [])

    return(

        <ReduxProvider store = {store}>
            <PaperProvider theme = {theme}>
                <NavigationProvider>
                    <AppRoute />
                </NavigationProvider>
            </PaperProvider>
        </ReduxProvider>

    )

}

export default App