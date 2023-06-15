import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { IconButton, Text, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { StackScreenProps } from '@react-navigation/stack'
import { CreateChargeRouteParams } from '../../../routes/types'

import { useAppSelector } from '../../../redux/hooks'
import { setNewCharge } from '../../../redux/reducers/charges/chargesReducer'
import { setFilteredContacts } from '../../../redux/reducers/createCharge/createChargeReducer'

import ScreenRender from '../../../components/ScreenRender'
import Section from '../../../components/Section'
import ContactBox from './components/ContactBox'
import NoData from '../../../components/NoData'
import getContacts from '../../../scripts/contacts/getContacts'

const CreateChargeDebtor: React.FC <StackScreenProps<CreateChargeRouteParams, 'debtor'>> = ({ navigation }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)
    const { newCharge } = useAppSelector(state => state.charges)
    const { filteredContacts } = useAppSelector(state => state.createCharge)
    const { contacts } = useAppSelector(state => state.contacts)

    const [searchContacts, setSearchContacts] = useState<boolean>(false)

    const handleSearchContacts = (value: string) => {
        dispatch(setFilteredContacts(value.length > 0 ? contacts.filter(f => f.toLowerCase().includes(value.toLowerCase())).sort().slice(0, 10) : []))
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let newColor = '#'
        for(let i = 0; i < 6; i++){
            newColor += letters[Math.floor(Math.random() * 16)]
        }
        return newColor
    }

    useEffect(() => {
        //! Realocar para Home
        (async() => {await getContacts(dispatch)})()
    }, [])

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" statusBarBackgroundColor = "rgba(255,255,255,0.9)" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12}>
                        <Text style = {{fontSize: 40}}>Para quem vai a <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                    </Section.Column>
                    <Section.Column>
                        <TextInput
                            mode = "outlined"
                            placeholder = {searchContacts ? 'Pesquisar contatos' : 'Nome do devedor'}
                            style = {{width: '100%'}}
                            selectionColor = {theme.primary}
                            activeOutlineColor = {theme.primary}
                            value = {newCharge.debtor}
                            onChangeText = {value => {
                                dispatch(setNewCharge({...newCharge, debtor: value}))
                                if(searchContacts && contacts) handleSearchContacts(value)
                            }}
                            right = {
                                <TextInput.Icon 
                                    name = {searchContacts ? 'close' : 'account-search'} 
                                    onPress = {async() => {
                                        const willSearch = searchContacts
                                        setSearchContacts(!willSearch)

                                        if(!willSearch){
                                            if(!!newCharge.debtor && newCharge.debtor.length > 0) handleSearchContacts(newCharge.debtor)
                                            else dispatch(setFilteredContacts([]))
                                        } 
                                    }} 
                                />
                            }
                        />
                    </Section.Column>
                    {!!newCharge.debtor && newCharge.debtor.length > 0 && (
                        <Section.Column marginTop = {8} center>
                            <Text>{`Você está cobrando ${newCharge.formattedValue} de ${newCharge.debtor}`}</Text>
                        </Section.Column>
                    )}
                    {searchContacts && (
                        <>
                            <Section.Column marginTop = {24} marginBottom = {24}>
                                <Text>{newCharge.debtor && newCharge.debtor.length > 0 ? `${filteredContacts.length} Reultados de ${newCharge.debtor}` : 'Comece a pequisar um contato' }</Text>
                                {filteredContacts.length > 0 && filteredContacts.map((name, index) => (
                                    <ContactBox 
                                        key = {index} 
                                        name = {name} 
                                        theme = {getRandomColor()} 
                                        onSelect = {() => {
                                            dispatch(setNewCharge({...newCharge, debtor: name}))
                                            handleSearchContacts(name)
                                            navigation.navigate('info')
                                        }} 
                                    />
                                ))}
                            </Section.Column>
                            {filteredContacts.length === 0 && !!newCharge.debtor && newCharge.debtor.length !== 0 && (
                                <NoData emoji = "sad" message = {['Nenhum contato encontrado']} />
                            )}
                        </>
                    )}
                </View>
                <Section.Row marginBottom = {24} between>
                    <IconButton
                        icon = 'arrow-left'
                        onPress = {() => navigation.goBack()}
                    />
                    <IconButton
                        icon = 'arrow-right'
                        size = {32}
                        color = 'green'
                        disabled = {!newCharge.debtor || newCharge.debtor.length === 0}
                        onPress = {() => navigation.navigate('info')}
                    />
                </Section.Row>
            </ScreenRender>
        </>

    )

}

export default CreateChargeDebtor