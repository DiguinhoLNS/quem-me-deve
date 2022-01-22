import React from 'react'
import { Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Section from '../Section'

const NoDebtors: React.FC = () => {

    return(

        <Section.Column center>
            <MaterialCommunityIcons name = "emoticon-cool-outline" size = {80} />
            <Text>Olha que legal,</Text>
            <Text>você não possui devedores!</Text>
        </Section.Column>

    )

}

export default NoDebtors