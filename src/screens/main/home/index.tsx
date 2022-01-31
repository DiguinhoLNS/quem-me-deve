import React, { useRef } from 'react'
import { FlatList, View } from 'react-native'
import { ActivityIndicator, Button, Text } from 'react-native-paper'
import { FakeCurrencyInput, formatNumber } from 'react-native-currency-input'
import RBSheet from "react-native-raw-bottom-sheet"
import { useDispatch } from 'react-redux'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { MainRouteParams } from '../../../routes/types'

import themes from '../../../styles/themes'
import { LayoutStyles } from '../../../styles/layout'

import { useAppSelector } from '../../../redux/hooks'
import { resetNewCharge, setNewCharge } from '../../../redux/reducers/charges/chargesReducer'
import { setFilteredContacts } from '../../../redux/reducers/createCharge/createChargeReducer'

import ScreenRender from '../../../components/ScreenRender'
import ChargeBox from '../../../components/ChargeBox'
import Section from '../../../components/Section'
import MainHeader from '../../../components/MainHeader'
import ThemePicker from '../../../components/Theme/Picker'
import setTheme from '../../../scripts/app/theme/setTheme'
import createCharge from '../../../scripts/charge/createCharge'
import Sheet from '../../../components/Sheet'
import formatNumberProps from '../../../constants/formatNumberProps'
import fixedCharges from '../../../scripts/charge/fixedCharges'
import OptionBox from '../../../components/OptionBox'
import NoData from '../../../components/NoData'

const Home: React.FC <BottomTabScreenProps<MainRouteParams, 'home'>> = ({ navigation }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)
    const { charges, newCharge, loadingCharges } = useAppSelector(state => state.charges)

    const chargeSheetRef = useRef<RBSheet>(null)
    const themeSheetRef = useRef<RBSheet>(null)

    const homeOptions = [
        {label: 'Cobrança Rápida', icon: 'flash', onPress: () => chargeSheetRef.current?.open()},
        {label: 'Nova Cobrança', icon: 'cash-plus', onPress: () => {
            dispatch(resetNewCharge())
            dispatch(setFilteredContacts([]))
            navigation.navigate('createChargeRoute')
        }},
        {label: 'Alterar tema', icon: 'palette', onPress: () => themeSheetRef.current?.open()},
    ]

    const SHOW_LOADING = loadingCharges
    const SHOW_DATA = !loadingCharges && charges && charges.length > 0
    const SHOW_NO_DATA = !loadingCharges && (!charges || charges && charges.length === 0)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperMarginTop = {false}>
                <MainHeader>
                    {SHOW_NO_DATA && <Text style = {{fontSize: 40, fontWeight: '700'}}>R$ 0,00</Text>}
                    {SHOW_DATA && <Text style = {{fontSize: 40, fontWeight: '700'}}>{formatNumber(charges.filter(data => !data.paid).map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>}
                </MainHeader>
                {SHOW_LOADING && 
                    <Section.Row center>
                        <ActivityIndicator size = {48} color = {theme.primary} />
                    </Section.Row>
                }
                <>
                    <Section.Column>
                        <Text>Opções</Text>
                    </Section.Column>
                    <View style = {{height: 84}}>
                        <FlatList
                            data = {homeOptions}
                            contentContainerStyle = {{paddingHorizontal: LayoutStyles.marginHorizontal, paddingVertical: 12}}
                            horizontal = {true}
                            showsHorizontalScrollIndicator = {false}
                            keyExtractor = {(item, index) => index.toString()}
                            ItemSeparatorComponent = {() => <View style = {{width: 2, borderRadius: 2, marginHorizontal: 16, backgroundColor: theme.primary}}/>}                        
                            renderItem = {({item}) => <OptionBox {...item} color = {theme.primary} />}
                        />
                    </View>
                </>
                <>
                    {(SHOW_DATA && fixedCharges(charges).length > 0) && (
                        <>
                            <Section.Column marginTop = {12} marginBottom = {8}>
                                <Text>{`Fixados (${fixedCharges(charges).length})`}</Text>
                            </Section.Column>
                            {charges.filter(data => data.fix).map((item, index) => (
                                <Section.Column key = {index} marginBottom = {charges.length === index+1 ? 0 : 12}>
                                    <ChargeBox key = {index} data = {item} showIcons />
                                </Section.Column>
                            ))}
                        </>
                    )}
                </>
                <>
                    <Section.Column marginTop = {12} marginBottom = {8}>
                        <Text>{SHOW_DATA && `Você tem ${charges.filter(data => !data.paid && !data.fix).length} cobranças` || 'Cobranças'}</Text>
                    </Section.Column>
                    {SHOW_NO_DATA && <NoData emoji = "cool" message = {['Olha que legal,', 'você não possui devedores!']} />}
                    {SHOW_DATA && charges.filter(data => !data.paid && !data.fix).map((item, index) => (
                        <Section.Column key = {index} marginBottom = {charges.filter(data => !data.paid).length === index+1 ? 0 : 12}>
                            <ChargeBox key = {index} data = {item} />
                        </Section.Column>
                    ))}
                </>
            </ScreenRender>
            <>
                <Sheet sheetRef = {chargeSheetRef} height = {200} onClose = {() => dispatch(resetNewCharge())}>
                    <FakeCurrencyInput
                        value = {newCharge.value}
                        minValue = {0}
                        style = {{fontSize: 50}}
                        prefix = "R$ "
                        onChangeValue = {value => 
                            dispatch(setNewCharge({
                                ...newCharge,
                                value: value ?? 0, 
                                formattedValue: formatNumber(value ?? 0, formatNumberProps), 
                            }))
                        }
                    />
                    <Button 
                        mode = "contained" 
                        uppercase = {false}
                        style = {{backgroundColor: theme.primary}}
                        disabled = {!newCharge.value}
                        onPress = {() => {
                            createCharge(dispatch)
                            chargeSheetRef.current?.close()
                        }}
                    >{`Cobrar ${newCharge.formattedValue}`}</Button>
                </Sheet>

                <Sheet sheetRef = {themeSheetRef} height = {120}>
                    <View style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 12}}>
                        {Object.keys(themes).map((data, index) => 
                            <ThemePicker
                                key = {index}
                                color = {(themes as any)[data].primary}
                                active = {(themes as any)[data].primary === theme.primary}
                                onPress = {() => {setTheme(dispatch, (themes as any)[data]); themeSheetRef.current?.close()}}
                            />
                        )}
                    </View>
                </Sheet>
            </>
        </>

    )

}

export default Home