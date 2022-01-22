import React, { Fragment, useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { formatNumber } from 'react-native-currency-input'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useAppSelector } from '../../redux/hooks'

import ScreenRender from '../../components/ScreenRender'
import MainHeader from '../../components/MainHeader'
import formatNumberProps from '../../constants/formatNumberProps'
import largestCharge from '../../scripts/charge/largestCharge'
import Section from '../../components/Section'
import ChargeBox from '../../components/ChargeBox'

const Debtors: React.FC = () => {

    const { charges, loadingCharges } = useAppSelector(state => state.charges)

    const SHOW_LOADING = loadingCharges
    const SHOW_DATA = !loadingCharges && charges && charges.length > 0
    const SHOW_NO_DATA = !loadingCharges && (!charges || charges && charges.length === 0)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperMarginTop = {false}>
                <MainHeader>
                    {SHOW_NO_DATA && <Text style = {{fontSize: 40}}>R$ 0,00</Text>}
                    {SHOW_DATA && (
                        <>
                            <Text style = {{fontSize: 40}}>{formatNumber(charges.filter(data => !data.paid).map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>
                            <View style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24}}>
                                <View>
                                    <Text>Maior</Text>
                                    <Text style = {{fontSize: 22}}>{largestCharge(charges.filter(data => !data.paid)).formattedValue}</Text>
                                </View>
                                <View>
                                    <Text>Pagas</Text>
                                    <Text style = {{fontSize: 22}}>{formatNumber(charges.filter(data => data.paid).map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>
                                </View>
                            </View>
                        </>
                    )}
                </MainHeader>
                {SHOW_DATA && [...new Set(charges.filter(filtered => !filtered.paid).map(date => date.date.day))].map((dates, index) => (
                    <Fragment key = {index}>
                        <Section.Column marginBottom = {8}>
                            <Text>{dates}</Text>
                        </Section.Column>
                        {charges.filter(filtered => filtered.date.day === dates && !filtered.paid).map((item, itemIndex) => (
                            <Section.Column key = {itemIndex} marginBottom = {charges.filter(filtered => filtered.date.day === dates && !filtered.paid).length === itemIndex+1 ? 24 : 12}>
                                <ChargeBox {...item} />
                            </Section.Column>
                        ))}
                    </Fragment>
                ))}
            </ScreenRender>
        </>

    )

}

export default Debtors