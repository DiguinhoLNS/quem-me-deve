import React from 'react'
import { Text } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { FilterProps } from './types'

import * as S from './styles'

const Filter: React.FC <FilterProps> = ({ index, active, label, icon, color, onPress, onActive }) => {

    return(

        <S.FilterItem
            active = {active}
            color = {color}
            onPress = {() => {
                onPress()
                onActive(index)
            }}
        >
            <MaterialCommunityIcons name = {icon} size = {16} color = {color} />
            <Text style = {{marginLeft: 4, color}}>{label}</Text>
        </S.FilterItem>

    )

}

export default Filter