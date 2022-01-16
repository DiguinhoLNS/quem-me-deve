import React, { useEffect, useRef } from 'react'
import { ActivityIndicator, Button, FAB, Text, TextInput } from 'react-native-paper'
import { FakeCurrencyInput, formatNumber, FormatNumberOptions } from 'react-native-currency-input'
import RBSheet from "react-native-raw-bottom-sheet"
import { useDispatch } from 'react-redux'

import themes from '../../styles/themes'

import { useAppSelector } from '../../redux/hooks'
import { createNewCharge, resetNewCharge } from '../../redux/reducers/charges/chargesReducer'

import ScreenRender from '../../components/ScreenRender'
import Sheet from './components/Sheet'
import createCharge from '../../scripts/createCharge'
import ChargeBox from '../../components/ChargeBox'
import Section from '../../components/Section'
import MainHeader from '../../components/MainHeader'
import setTheme from '../../scripts/app/theme/setTheme'

const Home: React.FC = () => {

    const dispatch = useDispatch()
    const { charges, newCharge, loadingCharges } = useAppSelector(state => state.charges)
    const { theme } = useAppSelector(state => state.appTheme)

    const sheetRef = useRef<RBSheet>(null)

    const formatNumberProps: FormatNumberOptions = {
        separator: ',',
        prefix: 'R$ ',
        precision: 2,
        delimiter: '.',
        signPosition: 'beforePrefix'
    }

    const SHOW_LOADING = loadingCharges
    const SHOW_DATA = !loadingCharges && charges && charges.length > 0
    const SHOW_NO_DATA = !loadingCharges && (!charges || charges && charges.length === 0)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperMarginTop = {false}>
                <MainHeader>
                    {SHOW_NO_DATA && <Text style = {{fontSize: 40}}>R$ 0,00</Text>}
                    {SHOW_DATA && <Text style = {{fontSize: 40}}>{formatNumber(charges.map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>}
                </MainHeader>
                {SHOW_LOADING && <ActivityIndicator size = {48} color = {theme.primary} />}
                {SHOW_NO_DATA && 
                    <Section.Row center>
                        <Text>Você não possui devedores :)</Text>
                    </Section.Row>
                }
                {SHOW_DATA && (
                    <>
                        <Section.Column marginBottom = {8}>
                            <Text>Cobranças</Text>
                        </Section.Column>
                        {charges.map((item, index) => (
                            <Section.Column key = {index} marginBottom = {charges.length === index+1 ? 0 : 10}>
                                <ChargeBox key = {index} {...item} />
                            </Section.Column>
                        ))}
                    </>
                )}
                <Section.Row marginTop = {24}>
                    {Object.keys(themes).map((data, index) => 
                        <Button 
                            key = {index} 
                            color = "#000000"
                            style = {{backgroundColor: (themes as any)[data].primary}} 
                            onPress = {() => setTheme(dispatch, (themes as any)[data])}
                        >{(themes as any)[data].name}</Button>
                    )}
                </Section.Row>
            </ScreenRender>
            <FAB
                icon = "plus"
                style = {{
                    position: 'absolute',
                    right: 24,
                    bottom: 24,
                    backgroundColor: theme.primary
                }}
                onPress = {() => sheetRef.current?.open()}
            />
            <Sheet sheetRef = {sheetRef} onClose = {() => dispatch(resetNewCharge())}>
                <FakeCurrencyInput
                    value = {newCharge.value}
                    minValue = {0}
                    style = {{fontSize: 50}}
                    prefix = "R$"
                    delimiter = ","
                    separator = "."
                    precision = {2}
                    onChangeValue = {value => 
                        dispatch(createNewCharge({
                            id: '', 
                            value: value ?? 0, 
                            formattedValue: formatNumber(value ?? 0, formatNumberProps), 
                            date: {day: undefined, time: undefined}
                        }))
                    }
                />
                <Button 
                    mode = "contained" 
                    style = {{backgroundColor: theme.primary}}
                    disabled = {!newCharge.value}
                    onPress = {() => {
                        createCharge(dispatch)
                        sheetRef.current?.close()
                    }}
                >{`${newCharge.name ? `${newCharge.name} te deve` : 'Cobrar'} ${newCharge.formattedValue}`}</Button>
            </Sheet>
        </>

    )

}

export default Home