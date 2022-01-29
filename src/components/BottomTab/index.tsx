import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BottomTabItemProps, BottomTabProps } from './types'

import * as S from './styles'
import { Elevation } from '../../styles/base'

import { useAppSelector } from '../../redux/hooks'

const BottomTab: React.FC <BottomTabProps> = ({ state, navigation }) => {

    const { theme } = useAppSelector(state => state.appTheme)

    const Item: React.FC <BottomTabItemProps> = ({ icon, route, active }) => (
        <S.BottomTabItem onPress = {() => navigation.navigate(route)}>
            <MaterialCommunityIcons name = {`${icon}${!active ? '-outline' : ''}`} size = {32} color = {active ? theme.primary : '#AAA'} />
            {active && <S.BottomTabItemActiveIndicator color = {theme.primary} />}
        </S.BottomTabItem>
    )

    return(

        <>
            {[0, 1, 2].includes(state.index) && (
                <S.BottomTabWrapper>
                    <S.BottomTabContainer style = {Elevation.elevation5}>
                        <Item icon = "home" route = "home" active = {state.index === 0} />
                        <Item icon = "wallet" route = "charges" active = {state.index === 1} />
                        <Item icon = "account" route = "profile" active = {state.index === 2} />
                    </S.BottomTabContainer>
                </S.BottomTabWrapper>
            )}
        </>

    )

}

export default BottomTab