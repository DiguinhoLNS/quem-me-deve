import React, { useCallback, useState } from 'react'
import { Dimensions, View, PermissionsAndroid, Platform, TouchableOpacity  } from 'react-native'
import { IconButton, Text, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import Contacts from 'react-native-contacts'

import { StackScreenProps } from '@react-navigation/stack'
import { CreateChargeRouteParams } from '../../../routes/types'

import { LayoutStyles } from '../../../styles/layout'

import { useAppSelector } from '../../../redux/hooks'
import { setNewCharge } from '../../../redux/reducers/charges/chargesReducer'
import { setContacts, setFilteredContacts } from '../../../redux/reducers/createCharge/createChargeReducer'

import ScreenRender from '../../../components/ScreenRender'
import Section from '../../../components/Section'

const CreateChargeDebtor: React.FC <StackScreenProps<CreateChargeRouteParams, 'debtor'>> = ({ navigation }) => {

    const dispatch = useDispatch()
    const { theme } = useAppSelector(state => state.appTheme)
    const { newCharge } = useAppSelector(state => state.charges)
    const { contacts, filteredContacts } = useAppSelector(state => state.createCharge)

    const [searchContacts, setSearchContacts] = useState<boolean>(false)

    const getContacts = async () => {
        if(Platform.OS === "android"){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: "Contacts",
                message: "This app would like to view your contacts.",
                buttonPositive: "OK",
            }).then(async () => {
                await Contacts.getAll().then(contacts => dispatch(setContacts(contacts.map(data => data.displayName))))
            })
        }
    }

    const handleSearchContacts = (value: string) => {
        dispatch(setFilteredContacts(value.length > 0 ? contacts.filter(f => f.toLowerCase().includes(value.toLowerCase())).sort().slice(0, 10) : []))
    }

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12} center>
                        <Text style = {{fontSize: 40}}>Para quem vai a <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                    </Section.Column>
                    <Section.Column>
                        <TextInput
                            mode = "outlined"
                            style = {{width: Dimensions.get('window').width - (2*LayoutStyles.marginHorizontal)}}
                            value = {newCharge.debtor}
                            onChangeText = {value => {
                                dispatch(setNewCharge({...newCharge, debtor: value}))
                                if(searchContacts && contacts) handleSearchContacts(value)
                            }}
                            right = {<TextInput.Icon name = {searchContacts ? 'close' : 'account-search'} onPress = {async() => {setSearchContacts(!searchContacts);await getContacts()}} />}
                        />
                    </Section.Column>
                    {searchContacts && (
                        <Section.Column marginTop = {24}>
                            <Text>Pequise um contato</Text>
                            {filteredContacts.length > 0 && filteredContacts.map((name, index) => (
                                <TouchableOpacity key = {index} onPress = {() => {dispatch(setNewCharge({...newCharge, debtor: name}));navigation.navigate('info')}}>
                                    <Text>{name}</Text>
                                </TouchableOpacity>
                            ))}
                        </Section.Column>
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
                        onPress = {() => navigation.navigate('info')}
                    />
                </Section.Row>
            </ScreenRender>
        </>

    )

}

export default CreateChargeDebtor