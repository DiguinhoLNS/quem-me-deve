import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import { LayoutStyles } from '../../styles/layout'

import toPixel from '../../utils/toPixel'

export const Header = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    margin-bottom: 24px;
    background-color: ${props => props.color ?? '#caffbf'};
`

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${toPixel(LayoutStyles.marginHorizontal)};
    margin-top: ${toPixel(StatusBar.currentHeight)};
`