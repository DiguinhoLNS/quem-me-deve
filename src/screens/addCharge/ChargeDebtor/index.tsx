import React from 'react'
import { View } from 'react-native'
import { IconButton, Text } from 'react-native-paper'

import { StackScreenProps } from '@react-navigation/stack'
import { CreateChargeRouteParams } from '../../../routes/types'

import ScreenRender from '../../../components/ScreenRender'
import Section from '../../../components/Section'

const CreateChargeDebtor: React.FC <StackScreenProps<CreateChargeRouteParams, 'debtor'>> = ({ navigation }) => {

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperBetween>
                <View>
                    <Section.Column marginTop = {24} marginBottom = {12} center>
                        <Text style = {{fontSize: 40}}>Para Quem vai a <Text style = {{fontWeight: '700'}}>Cobrança</Text>?</Text>
                    </Section.Column>
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