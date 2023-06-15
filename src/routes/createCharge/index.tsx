import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { CreateChargeRouteParams } from '../types'

import CreateChargeValue from '../../screens/createCharge/ChargeValue'
import CreateChargeDebtor from '../../screens/createCharge/ChargeDebtor'
import CreateChargeInfo from '../../screens/createCharge/ChargeInfo'

const CreateChargeRoute: React.FC = () => {

    const Stack = createStackNavigator<CreateChargeRouteParams>()

    return(

        <Stack.Navigator
            initialRouteName = "value"
            screenOptions = {{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name = "value" component = {CreateChargeValue} />
            <Stack.Screen name = "debtor" component = {CreateChargeDebtor} />
            <Stack.Screen name = "info" component = {CreateChargeInfo} />
        </Stack.Navigator>

    )

}

export default CreateChargeRoute