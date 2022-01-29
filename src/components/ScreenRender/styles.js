import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import toPixel from '../../utils/toPixel'

export const Wrapper = styled.View`
    position: relative;

    flex-grow: 1;
    flex-direction: column;
    justify-content: ${props => props.center ? 'center' : props.between ? 'space-between' : 'flex-start'};
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    padding-bottom: ${props => props.center || props.between ? '0px' : '80px'};
    margin-top: ${props => ['default', 'form'].includes(props.type) && props.marginTop ? toPixel(StatusBar.currentHeight) : '0'};
    background-color: transparent;
`