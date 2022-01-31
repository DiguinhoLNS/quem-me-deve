import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Button, IconButton, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { FakeCurrencyInput, formatNumber } from 'react-native-currency-input'

import { StackScreenProps } from '@react-navigation/stack'
import { CreateChargeRouteParams } from '../../../routes/types'

import { LayoutStyles } from '../../../styles/layout'

import { useAppSelector } from '../../../redux/hooks'
import { resetNewCharge, setNewCharge } from '../../../redux/reducers/charges/chargesReducer'

import ScreenRender from '../../../components/ScreenRender'
import Section from '../../../components/Section'
import formatNumberProps from '../../../constants/formatNumberProps'

const CreateChargeValue: React.FC <StackScreenProps<CreateChargeRouteParams, 'value'>> = ({ navigation }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)
    const { newCharge } = useAppSelector(state => state.charges)

    const [focus, setFocus] = useState(false)  

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" statusBarBackgroundColor = "rgba(255,255,255,0.9)" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12}>
                        <Text style = {{fontSize: 40}}>Qual o valor da <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                    </Section.Column>
                    <Section.Column>
                        <FakeCurrencyInput
                            value = {newCharge.value}
                            minValue = {0}
                            style = {{
                                width: Dimensions.get('window').width - (2*LayoutStyles.marginHorizontal), 
                                borderBottomWidth: 2, 
                                borderColor: focus ? theme.primary : '#000', 
                                fontSize: 40
                            }}
                            caretColor = {focus ? theme.primary : '#000'}
                            prefix = 'R$ '
                            onFocus = {() => setFocus(true)}
                            onBlur = {() => setFocus(false)}
                            onChangeValue = {value => dispatch(setNewCharge({...newCharge, value: value ?? 0, formattedValue: formatNumber(value ?? 0, formatNumberProps)}))}
                        />
                    </Section.Column>
                </View>
                <Section.Row marginBottom = {24} between>
                    <IconButton
                        icon = 'close'
                        onPress = {() => {
                            dispatch(resetNewCharge())
                            navigation.goBack()
                        }}
                    />
                    <IconButton
                        icon = 'arrow-right'
                        size = {32}
                        color = 'green'
                        disabled = {!newCharge.value}
                        onPress = {() => navigation.navigate('debtor')}
                    />
                </Section.Row>
            </ScreenRender>
        </>

    )

}

export default CreateChargeValue