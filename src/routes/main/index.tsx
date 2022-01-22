import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainRouteParams } from '../../routes/types'

import BottomTab from '../../components/BottomTab'
import Home from '../../screens/home'
import Debtors from '../../screens/debtors'
import Profile from '../../screens/profile'

const MainRoute: React.FC = () => {

    const Tab = createBottomTabNavigator<MainRouteParams>()

    return(

        <Tab.Navigator
            initialRouteName = "home"
            screenOptions = {{headerShown: false}}
            tabBar = {props => <BottomTab {...props} />}
        >
            <Tab.Screen name = "home" component = {Home} />
            <Tab.Screen name = "debtors" component = {Debtors} />
            <Tab.Screen name = "profile" component = {Profile} />
        </Tab.Navigator>

    )

}

export default MainRoute