import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import { LayoutStyles } from '../../styles/layout'

import toPixel from '../../utils/toPixel'

export const Header = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props => props.height ? toPixel(props.height) : 'auto'};
    margin-bottom: 24px;
    background-color: ${props => props.color};
`

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${toPixel(LayoutStyles.marginHorizontal)};
    margin-top: ${toPixel(StatusBar.currentHeight)};
`

export const HeaderProfileContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
`

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`