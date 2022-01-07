import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainRouteParams } from '../../routes/types'

import Home from '../../screens/home'

const MainRoute: React.FC = () => {

    const Tab = createBottomTabNavigator<MainRouteParams>()

    return(

        <Tab.Navigator
            initialRouteName = "home"
            //screenOptions = {{headerShown: false}}
            //tabBar = {props => <BottomTab {...props} />}
        >
            <Tab.Screen name = "home" component = {Home} />
        </Tab.Navigator>

    )

}

export default MainRoute