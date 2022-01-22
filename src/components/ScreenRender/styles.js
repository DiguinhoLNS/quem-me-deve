import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import toPixel from '../../utils/toPixel'

export const Wrapper = styled.View`
    position: relative;
    padding-bottom: 80px;
    margin-top: ${props => ['default', 'form'].includes(props.type) && props.marginTop ? toPixel(StatusBar.currentHeight) : '0'};
    background-color: transparent;
`