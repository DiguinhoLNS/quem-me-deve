import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, FAB, Text, TextInput } from 'react-native-paper'
import { FakeCurrencyInput, formatNumber, FormatNumberOptions } from 'react-native-currency-input'
import RBSheet from "react-native-raw-bottom-sheet"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../redux/hooks'
import { createNewCharge, resetNewCharge } from '../../redux/reducers/charges/chargesReducer'

import ScreenRender from '../../components/ScreenRender'
import Sheet from './components/Sheet'
import createCharge from '../../scripts/createCharge'

const Home: React.FC = () => {

    const dispatch = useDispatch()
    const { charges, newCharge, loadingCharges } = useAppSelector(state => state.charges)

    const sheetRef = useRef<RBSheet>(null)

    const formatNumberProps: FormatNumberOptions = {
        separator: ',',
        prefix: 'R$ ',
        precision: 2,
        delimiter: '.',
        signPosition: 'beforePrefix'
    }

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content">
                {loadingCharges && <ActivityIndicator size = {48} />}
                {charges && charges.map((data, index) => (
                    <View key = {index} style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text>{data.formattedValue}</Text>
                        <Text>{data.id}</Text>
                        <Text>{data.date.day} - {data.date.time}</Text>
                        <MaterialCommunityIcons name = "delete" size = {16} color = "red" onPress = {() => console.log()} />
                    </View>
                ))}
            </ScreenRender>
            <FAB
                icon = "plus"
                style = {{
                    position: 'absolute',
                    right: 24,
                    bottom: 24,
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
                    onChangeValue = {value => dispatch(createNewCharge({id: '', value: value ?? 0, formattedValue: formatNumber(value ?? 0, formatNumberProps), date: {day: undefined, time: undefined}}))}
                />
                <Button 
                    mode = "contained" 
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