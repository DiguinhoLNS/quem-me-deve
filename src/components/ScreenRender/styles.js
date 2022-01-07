import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

export const Wrapper = styled.View`
    position: relative;
    //padding: ${props => ['default'].includes(props.type) ? '24px 0' : ['form'].includes(props.type) ? '48px 0' : '0'};
    padding-bottom: ${props => props.paddingBottom ?? props.type === 'form' ? '48px' : '24px'};
    margin-top: ${props => ['default', 'form'].includes(props.type) ? StatusBar.currentHeight+'px' : '0'};
    background-color: transparent;
`