import styled from 'styled-components/native'

import { LayoutStyles } from '../../styles/layout'

import toPixel from '../../utils/toPixel'

export const SectionColumn = styled.View`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    width: 100%;
    padding: ${props => props.padding ?? `0px ${LayoutStyles.marginHorizontal}px`};
    margin-top: ${props => toPixel(props.marginTop) ?? '0px'};
    margin-bottom: ${props => toPixel(props.marginBottom) ?? '0px'};
`

export const SectionRow = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: ${props => props.center || props.between ? 'center' : 'flex-start'};
    justify-content: ${props => props.center ? 'center' : props.between ? 'space-between' : 'flex-start'};
    width: 100%;
    padding: ${props => props.padding ?? `0px ${LayoutStyles.marginHorizontal}px`};
    margin-top: ${props => toPixel(props.marginTop) ?? '0px'};
    margin-bottom: ${props => toPixel(props.marginBottom) ?? '0px'};
`