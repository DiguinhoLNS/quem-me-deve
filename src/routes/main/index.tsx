import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainRouteParams } from '../../routes/types'

import BottomTab from '../../components/BottomTab'
import Home from '../../screens/main/home'
import Debtors from '../../screens/main/debtors'
import Profile from '../../screens/main/profile'
import CreateChargeRoute from '../createCharge'

const MainRoute: React.FC = () => {

    const Tab = createBottomTabNavigator<MainRouteParams>()

    return(

        <Tab.Navigator
            initialRouteName = "home"
            screenOptions = {{headerShown: false}}
            tabBar = {props => <BottomTab {...props} />}
        >
            <Tab.Screen name = "home" component = {Home} />
            <Tab.Screen name = "charges" component = {Debtors} />
            <Tab.Screen name = "profile" component = {Profile} />

            <Tab.Screen name = "createChargeRoute" component = {CreateChargeRoute} />
        </Tab.Navigator>

    )

}

export default MainRoute