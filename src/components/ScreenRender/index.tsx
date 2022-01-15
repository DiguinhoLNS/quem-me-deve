import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ScreenRenderProps } from './types'

import { Wrapper } from './styles'
import { LayoutStyles } from '../../styles/layout'

const ScreenRender: React.FC <ScreenRenderProps> = props => {

    const isFocused = useIsFocused()

    const statusBarProps = {
        barStyle: props.statusBarStyle,
        backgroundColor: props.statusBarBackgroundColor ?? 'transparent',
        translucent: props.statusBarTranslucent ?? true,
        animated: props.statusBarAnimated ?? true,
    }

    return(

        <>
            {isFocused && <StatusBar {...statusBarProps} />}
            <SafeAreaView style = {{flex: 1, backgroundColor: props.wrapperBackgroundColor ?? LayoutStyles.background}}>
                <KeyboardAwareScrollView
                    style = {{backgroundColor: props.wrapperBackgroundColor ?? LayoutStyles.background}}
                    contentContainerStyle = {{flexGrow: 1, justifyContent: props.wrapperCenter ? 'center' : 'flex-start'}}
                    nestedScrollEnabled
                    keyboardShouldPersistTaps = "handled"
                >
                    <Wrapper type = {props.wrapperType ?? 'default'} marginTop = {props.wrapperMarginTop ?? true} translucent = {props.statusBarTranslucent}>{props.children}</Wrapper>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>

    )

}

export default ScreenRender