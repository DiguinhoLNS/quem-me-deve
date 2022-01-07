import React from 'react'
import { Provider as ReduxProvider } from "react-redux"
import { NavigationContainer as NavigationProvider } from '@react-navigation/native'
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper'

import { Theme } from "react-native-paper/lib/typescript/types"

import store from './redux/store'

import AppRoute from './routes'

const App: React.FC = () => {

    const fontConfig = {
        default: {
            regular: {fontFamily: 'Montserrat-Regular'},
            medium: {fontFamily: 'Montserrat-Medium'},
            light: {fontFamily: 'Montserrat-Light'},
            thin: {fontFamily: 'Montserrat-LightItalic'},
        },
    }

    const theme: Theme = {
        ...DefaultTheme,
        fonts: configureFonts(fontConfig),
    }

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