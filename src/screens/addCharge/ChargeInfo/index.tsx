import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { IconButton, Text } from 'react-native-paper'

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
            <ScreenRender statusBarStyle = "dark-content" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12}>
                        <Text>{newCharge.formattedValue}</Text>
                        <Text>{newCharge.debtor}</Text>
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