import React from 'react'
import { Alert, Share, TouchableOpacity, Vibration } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native"

import { ChargeBoxProps } from './types'

import * as S from './styles'
import { Elevation } from '../../styles/base'

import { useAppSelector } from '../../redux/hooks'

import removeCharge from '../../scripts/charge/removeCharge'
import checkCharge from '../../scripts/charge/checkCharge'
import toggleFixCharge from '../../scripts/charge/toggleFixCharge'

const ChargeBox: React.FC <ChargeBoxProps> = ({ data, showIcons }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)

    const [open, setOpen] = React.useState(false)

    const shareCharge = async () => {
        try {
            await Share.share({message: `${data.name ?? 'Você'} deve ${data.formattedValue}`})
        } catch (error) {
            console.log(error)
            Alert.alert('Erro', 'Não foi possível compartilhar')
        }
    }

    const handleLongPress = () => {
        Vibration.vibrate(100, false)
        console.log(data)
        setOpen(!open)
    }

    return(

        <S.ChargeBox style = {Elevation.elevation4}>
            <Collapse isExpanded = {open} disabled = {true} handleLongPress = {handleLongPress}>
                <CollapseHeader>
                    <S.ChargeBoxHeaderContainer onPress = {() => open ? setOpen(false) : console.log('click')} onLongPress = {() => handleLongPress()}>
                        <S.ChargeBoxHeaderTextContainer>
                            <Text style = {{fontSize: 28}}>{data.formattedValue}</Text>
                            <Text style = {{fontSize: 12}}>{data.name ? `${data.name} - ` : ''}{data.date.day} as {data.date.time?.substring(0,5)}</Text>
                        </S.ChargeBoxHeaderTextContainer>
                        {showIcons && (
                            <S.ChargeBoxHeaderIconContainer>
                                {data.paid && <MaterialCommunityIcons name = "check" size = {16} color = "green" />}
                                {data.fix && <MaterialCommunityIcons name = "pin" size = {16} color = {theme.primary} style = {{marginLeft: 4}} />}
                            </S.ChargeBoxHeaderIconContainer>
                        )}
                    </S.ChargeBoxHeaderContainer>
                </CollapseHeader>
                <CollapseBody>
                    <S.ChargeBoxBodyContainer>
                        <S.ChargeBoxOptionGroup>
                            <TouchableOpacity onPress = {() => toggleFixCharge(dispatch, data.id)}>
                                <MaterialCommunityIcons name = {data.fix ? 'pin-off' : 'pin'} size = {24} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => shareCharge()}>
                                <MaterialCommunityIcons name = "share-variant" size = {24} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => {removeCharge(dispatch, data.id); setOpen(false)}}>
                                <MaterialCommunityIcons name = "delete" size = {24} color = "red" />
                            </TouchableOpacity>
                            {!data.paid && (
                                <TouchableOpacity onPress = {() => checkCharge(dispatch, data.id)}>
                                    <MaterialCommunityIcons name = "check" size = {24} color = "green" />
                                </TouchableOpacity>
                            )}
                        </S.ChargeBoxOptionGroup>
                    </S.ChargeBoxBodyContainer>
                </CollapseBody>
            </Collapse>
        </S.ChargeBox>

    )

}

export default ChargeBox