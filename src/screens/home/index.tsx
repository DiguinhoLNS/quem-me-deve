import React, { useRef, useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { FakeCurrencyInput } from 'react-native-currency-input'
import RBSheet from "react-native-raw-bottom-sheet"

import ScreenRender from '../../components/ScreenRender'
import Sheet from './components/Sheet'

const Home: React.FC = () => {

    const [newCharge, setNewCharge] = useState<number>(0)
    const sheetRef = useRef<RBSheet>(null)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content">
                <Button onPress = {() => sheetRef.current?.open()}>+</Button>
            </ScreenRender>
            <Sheet sheetRef = {sheetRef}>
                <FakeCurrencyInput
                    value = {newCharge}
                    delimiter = ","
                    separator = "."
                    precision = {2}
                    onChangeValue = {value => setNewCharge(value ?? 0)}
                />
                <Button mode = "contained" disabled = {newCharge === 0} onPress = {() => setNewCharge(0)}>{`Cobrar R$${newCharge}`}</Button>
            </Sheet>
        </>

    )

}

export default Home