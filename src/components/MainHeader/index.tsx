import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

import * as S from './styles'

import { useAppSelector } from '../../redux/hooks'

const MainHeader: React.FC = props => {

    const { theme } = useAppSelector(state => state.appTheme)

    return(

        <S.Header color = {theme.primary}>
            <S.HeaderContent>
                <S.HeaderProfileContainer>
                    <TouchableOpacity>
                        <Avatar.Text label = "P" size = {40} style = {{backgroundColor: 'rgba(0,0,0,0.5)'}} />
                    </TouchableOpacity>
                    <Text style = {{marginLeft: 8, fontSize: 18}}>Placeholder</Text>
                </S.HeaderProfileContainer>
                {props.children}
            </S.HeaderContent>
        </S.Header>

    )

}

export default MainHeader