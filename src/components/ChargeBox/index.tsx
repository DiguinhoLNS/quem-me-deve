import React from 'react'
import { Alert, Share, TouchableOpacity, Vibration } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native"

import { Charge } from '../../types/charge'

import * as S from './styles'

import removeCharge from '../../scripts/removeCharge'
import { Elevation } from '../../styles/base'

const ChargeBox: React.FC <Charge> = props => {

    const dispatch = useDispatch()

    const shareCharge = async () => {
        try {
            await Share.share({message: `${props.name ?? 'Você'} deve ${props.formattedValue}`})
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível compartilhar')
        }
    }

    const handleLongPress = () => {
        Vibration.vibrate(100, false)
        console.log(props)
        shareCharge()
    }

    return(

        <S.ChargeBox style = {Elevation.elevation4}>
            <Collapse handleLongPress = {handleLongPress}>
                <CollapseHeader>
                    <S.ChargeBoxHeaderContainer>
                        <Text style = {{fontSize: 32}}>{props.formattedValue}</Text>
                        <Text style = {{fontSize: 12}}>{props.name ?? 'sem nome'} - {props.date.day} as {props.date.time?.substring(0,5)}</Text>
                    </S.ChargeBoxHeaderContainer>
                </CollapseHeader>
                <CollapseBody>
                    <S.ChargeBoxBodyContainer>
                        <S.ChargeBoxOptionGroup>
                            <TouchableOpacity onPress = {() => {}}>
                                <MaterialCommunityIcons name = "pencil" size = {24} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => shareCharge()}>
                                <MaterialCommunityIcons name = "share-variant" size = {24} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => removeCharge(dispatch, props.id)}>
                                <MaterialCommunityIcons name = "delete" size = {24} color = "red" />
                            </TouchableOpacity>
                        </S.ChargeBoxOptionGroup>
                    </S.ChargeBoxBodyContainer>
                </CollapseBody>
            </Collapse>
        </S.ChargeBox>

    )

}

export default ChargeBox