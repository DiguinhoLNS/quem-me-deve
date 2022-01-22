import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

import { MainHeaderProps } from './types'

import * as S from './styles'
import { Elevation } from '../../styles/base'

import { useAppSelector } from '../../redux/hooks'

const MainHeader: React.FC <MainHeaderProps> = ({ children, height }) => {

    const { theme } = useAppSelector(state => state.appTheme)

    return(

        <S.Header style = {Elevation.elevation5} height = {height} color = {theme.primary}>
            <S.HeaderContainer>
                <S.HeaderProfileContainer>
                    <TouchableOpacity>
                        <Avatar.Text label = "P" size = {40} style = {{backgroundColor: 'rgba(0,0,0,0.5)'}} />
                    </TouchableOpacity>
                    <Text style = {{marginLeft: 8, fontSize: 14}}>Usuário</Text>
                </S.HeaderProfileContainer>
                <S.HeaderContent>{children}</S.HeaderContent>
            </S.HeaderContainer>
        </S.Header>

    )

}

export default MainHeader