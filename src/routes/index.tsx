import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../redux/hooks'
import { setAppLoading } from '../redux/reducers/app/appAuthReducer'

import MainRoute from './main'
import getCharges from '../scripts/getCharges'
import setCharges from '../scripts/setCharges'
import getTheme from '../scripts/app/theme/getTheme'
import ScreenRender from '../components/ScreenRender'

const AppRoute: React.FC = () => {

    const dispatch = useDispatch()
    const { loading } = useAppSelector(state => state.appAuth)
    const { charges } = useAppSelector(state => state.charges)

    useEffect(() => {
        (async() => {
            await getCharges(dispatch)
            await getTheme(dispatch)
            
            dispatch(setAppLoading(false))
        })()
    }, [])

    useEffect(() => {
        (async() => {charges && await setCharges(charges)})()
    }, [charges])

    return(

        <>
            {!loading && (<MainRoute />) || (
                <ScreenRender statusBarStyle = "dark-content" wrapperCenter>
                    <ActivityIndicator size = "large" color = "#000000" />
                </ScreenRender>
            )}
        </>

    )

}

export default AppRoute