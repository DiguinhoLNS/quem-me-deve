import { PermissionsAndroid, Platform } from "react-native"
import Contacts from 'react-native-contacts'

import { setContacts } from "../../redux/reducers/contacts/contactsReducer"

export default async function getContacts(dispatch: Function){

    try {
        if(Platform.OS === "android"){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: "Contatos",
                message: "Este aplicativo gostaria de acessar seus contatos.",
                buttonPositive: "Permitir",
                buttonNegative: "Cancelar"
            }).then(async () => {
                await Contacts.getAll().then(contacts => dispatch(setContacts(contacts.map(data => data.displayName))))
            })
        }
    } catch (error) {
        console.log('getContacts error:',error)
        dispatch(setContacts([]))
    }

}