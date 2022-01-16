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
    background-color: ${props => props.color};
`

export const HeaderProfileContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
`

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${toPixel(LayoutStyles.marginHorizontal)};
    margin-top: ${toPixel(StatusBar.currentHeight)};
`