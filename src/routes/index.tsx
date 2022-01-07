import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../redux/hooks'

import MainRoute from './main'
import getCharges from '../scripts/getCharges'
import setCharges from '../scripts/setCharges'

const AppRoute: React.FC = () => {

    const dispatch = useDispatch()
    const { charges } = useAppSelector(state => state.charges)

    useEffect(() => {
        (async() => {await getCharges(dispatch)})()
    }, [])

    useEffect(() => {
        (async() => {charges && await setCharges(charges)})()
    }, [charges])

    return(

        <>
            <MainRoute />
        </>

    )

}

export default AppRoute