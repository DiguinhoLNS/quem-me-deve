import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, IconButton, Text } from 'react-native-paper'

import { StackScreenProps } from '@react-navigation/stack'

import { useAppSelector } from '../../../redux/hooks'

import ScreenRender from '../../../components/ScreenRender'
import Section from '../../../components/Section'
import createCharge from '../../../scripts/charge/createCharge'

const CreateChargeInfo: React.FC <StackScreenProps<any>> = ({ navigation }) => {

    const dispatch = useDispatch()
    const { newCharge } = useAppSelector(state => state.charges)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" statusBarBackgroundColor = "rgba(255,255,255,0.9)" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12}>
                        <Text style = {{fontSize: 32}}>Você está cobrando,</Text>
                        <Text style = {{fontSize: 32}}>
                            <Text style = {{fontWeight: '700'}}>{newCharge.formattedValue}</Text>
                            <Text> de </Text>
                            <Text style = {{fontWeight: '700'}}>{newCharge.debtor}</Text>
                        </Text>
                    </Section.Column>
                    <Section.Column marginBottom = {48}>
                        <Text style = {{fontSize: 32}}>Deseja continuar com essa cobrança?</Text>
                    </Section.Column>
                </View>
                <Section.Row marginBottom = {24} between>
                    <IconButton
                        icon = 'arrow-left'
                        onPress = {() => navigation.goBack()}
                    />
                    <IconButton
                        icon = 'check'
                        size = {32}
                        color = 'green'
                        onPress = {() => {
                            createCharge(dispatch)
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'home' }]
                            })
                        }}
                    />
                </Section.Row>
            </ScreenRender>
        </>

    )

}

export default CreateChargeInfo