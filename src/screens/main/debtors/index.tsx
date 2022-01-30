import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import { formatNumber } from 'react-native-currency-input'
import { useDispatch } from 'react-redux'

import { LayoutStyles } from '../../../styles/layout'

import { useAppSelector } from '../../../redux/hooks'
import { setDebtorFilterAll, setDebtorFilterPaid, setDebtorFilterUnpaid } from '../../../redux/reducers/debtors/debtorsReducer'

import ScreenRender from '../../../components/ScreenRender'
import MainHeader from '../../../components/MainHeader'
import formatNumberProps from '../../../constants/formatNumberProps'
import largestCharge from '../../../scripts/charge/largestCharge'
import Section from '../../../components/Section'
import ChargeBox from '../../../components/ChargeBox'
import Filter from '../../../components/Filter'
import FilteredSection from './components/FilteredSection'
import NoData from '../../../components/NoData'

const Debtors: React.FC = () => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)
    const { charges, loadingCharges } = useAppSelector(state => state.charges)
    const { filterAll, filterPaid, filterUnpaid } = useAppSelector(state => state.debtors)

    const [activeFilter, setActiveFilter] = useState<number>(0)

    const debtorsOption = [
        {label: 'Todas', icon: 'currency-usd', color: theme.primary, onPress: () => dispatch(setDebtorFilterAll()), onActive: setActiveFilter},
        {label: 'Pagas', icon: 'check', color: '#4caf50', onPress: () => dispatch(setDebtorFilterPaid()), onActive: setActiveFilter},
        {label: 'Não pagas', icon: 'close', color: '#f44336', onPress: () => dispatch(setDebtorFilterUnpaid()), onActive: setActiveFilter},
    ]

    const SHOW_DATA = !loadingCharges && charges && charges.length > 0
    const SHOW_NO_DATA = !loadingCharges && (!charges || charges && charges.length === 0)

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperMarginTop = {false}>
                <MainHeader>
                    {SHOW_NO_DATA && <Text style = {{fontSize: 40, fontWeight: '700'}}>R$ 0,00</Text>}
                    {SHOW_DATA && (
                        <>
                            <Text style = {{fontSize: 40, fontWeight: '700'}}>{formatNumber(charges.filter(data => !data.paid).map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>
                            <View style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 24}}>
                                <View>
                                    <Text>Maior</Text>
                                    <Text style = {{fontSize: 22, fontWeight: '700'}}>{charges.filter(data => !data.paid).length > 0 ? largestCharge(charges.filter(data => !data.paid)).formattedValue : formatNumber(0, formatNumberProps)}</Text>
                                </View>
                                <View>
                                    <Text>Pagos</Text>
                                    <Text style = {{fontSize: 22, fontWeight: '700'}}>{formatNumber(charges.filter(data => data.paid).map(item => item.value).reduce((acc, value) => acc + value, 0), formatNumberProps)}</Text>
                                </View>
                            </View>
                        </>
                    )}
                </MainHeader>
                <Section.Column>
                    <Text>Filtros</Text>
                </Section.Column>
                <View style = {{height: 68}}>
                    <FlatList
                        data = {debtorsOption}
                        contentContainerStyle = {{paddingHorizontal: LayoutStyles.marginHorizontal, paddingTop: 12, paddingBottom: 24}}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor = {(item, index) => index.toString()}
                        ItemSeparatorComponent = {() => <View style = {{width: 8}} />}
                        renderItem = {({item, index}) => <Filter {...item} active = {activeFilter === index} index = {index} />}
                    />
                </View>
                {SHOW_NO_DATA && <NoData emoji = "cool" message = {['Olha que legal,', 'você não possui devedores!']} />}
                <>
                    {SHOW_DATA && filterAll && (
                        <FilteredSection
                            filterName = "Todos"
                            dates = {[...new Set(charges.map(date => date.date.day))]}
                            filteredCharges = {charges}
                        />
                    )}
                    {SHOW_DATA && filterPaid && (
                        <FilteredSection
                            filterName = "Pagas"
                            dates = {[...new Set(charges.filter(filtered => filtered.paid).map(date => date.date.day))]}
                            filteredCharges = {charges.filter(filtered => filtered.paid)} 
                        />
                    )}
                    {SHOW_DATA && filterUnpaid && (
                        <FilteredSection
                            filterName = "Não pagas"
                            dates = {[...new Set(charges.filter(filtered => !filtered.paid).map(date => date.date.day))]}
                            filteredCharges = {charges.filter(filtered => !filtered.paid)}
                        />
                    )}
                </>
            </ScreenRender>
        </>

    )

}

export default Debtors