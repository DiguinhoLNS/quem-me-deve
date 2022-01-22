import styled from 'styled-components/native'

export const ChargeBox = styled.View`
    width: 100%;
    border-radius: 12px;
    background-color: #FFFFFF;
`

export const ChargeBoxHeaderContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
`

export const ChargeBoxHeaderTextContainer = styled.View`
    display: flex;
    flex-direction: column;
`

export const ChargeBoxHeaderIconContainer = styled.View`
    display: flex;
    flex-direction: row;
`

export const ChargeBoxBodyContainer = styled.View`
    width: 100%;
    padding: 8px;
    border-radius: 12px;
    background-color: rgba(0,0,0,0.07);
`

export const ChargeBoxOptionGroup = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`