import React from 'react'
import { Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { OptionBoxProps } from './types'

import * as S from './styles'

const OptionBox: React.FC <OptionBoxProps> = ({ color, icon, label, onPress }) => {

    return(

        <S.OptionBox onPress = {() => onPress()}>
            <MaterialCommunityIcons name = {icon} size = {24} color = {color} />
            <Text>{label}</Text>
        </S.OptionBox>

    )

}

export default OptionBox