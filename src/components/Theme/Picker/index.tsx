import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ThemePickerProps } from './types'

import * as S from './styles'

const ThemePicker: React.FC <ThemePickerProps> = ({ color, active, onPress }) => {

    return(

        <S.ThemePickerBox
            color = {color}
            active = {active}
            onPress = {() => onPress()}
        >
            {active && <MaterialCommunityIcons name = "check" size = {24} color = {color} />}
        </S.ThemePickerBox>

    )

}

export default ThemePicker