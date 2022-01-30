import React from 'react'
import { Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NoDataProps } from './types'

import Section from '../Section'

const NoData: React.FC <NoDataProps> = ({ emoji, message }) => {

    return(

        <Section.Column center>
            <MaterialCommunityIcons name = {`emoticon-${emoji}-outline`} size = {80} />
            {message.map((text, index) => <Text key = {index} style = {{textAlign: 'center'}}>{text}</Text>)}
        </Section.Column>

    )

}

export default NoData