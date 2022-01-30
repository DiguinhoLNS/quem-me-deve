import React from 'react'
import { Avatar, Text } from 'react-native-paper'

import { ContactBoxProps } from './types'

import * as S from './styles'

const ContactBox: React.FC <ContactBoxProps> = ({ name, theme, onSelect }) => {

    return(

        <S.ContactBox onPress = {() => onSelect()}>
            <Avatar.Text label = {name.split(' ')[0].substring(0,1)} size = {48} style = {{backgroundColor: theme}} />
            <Text style = {{marginLeft: 12}}>{name}</Text>
        </S.ContactBox>

    )

}

export default ContactBox