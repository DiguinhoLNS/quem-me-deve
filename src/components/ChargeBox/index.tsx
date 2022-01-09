import React from 'react'
import { Alert, Share, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//@ts-ignore
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native"

import { Charge } from '../../types/charge'

import * as S from './styles'

import removeCharge from '../../scripts/removeCharge'

const ChargeBox: React.FC <Charge> = props => {

    const dispatch = useDispatch()

    const shareCharge = async () => {

        try {
            await Share.share({
                message: `${props.name ?? 'Você'} deve ${props.formattedValue}`,
            })
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível compartilhar')
        }

    }

    return(

        <S.ChargeBox>
            <Collapse>
                <CollapseHeader>
                    <S.ChargeBoxHeaderContainer>
                        <Text style = {{fontSize: 32, fontWeight: 'bold'}}>{props.formattedValue}</Text>
                    </S.ChargeBoxHeaderContainer>
                </CollapseHeader>
                <CollapseBody>
                    <S.ChargeBoxBodyContainer>
                        <Text style = {{fontSize: 14}}>{props.date.day} - {props.date.time}</Text>
                        <S.ChargeBoxOptionGroup>
                            <TouchableOpacity onPress = {() => removeCharge(dispatch, props.id)}>
                                <MaterialCommunityIcons name = "delete" size = {24} color = "red" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => shareCharge()}>
                                <MaterialCommunityIcons name = "share-variant" size = {24} />
                            </TouchableOpacity>
                        </S.ChargeBoxOptionGroup>
                    </S.ChargeBoxBodyContainer>
                </CollapseBody>
            </Collapse>
        </S.ChargeBox>

    )

}

export default ChargeBox