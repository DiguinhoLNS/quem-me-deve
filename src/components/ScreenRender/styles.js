import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

export const Wrapper = styled.View`
    position: relative;
    margin-top: ${props => ['default', 'form'].includes(props.type) ? StatusBar.currentHeight+'px' : '0'};
    background-color: transparent;
`