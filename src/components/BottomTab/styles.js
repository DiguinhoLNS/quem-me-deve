import styled from 'styled-components/native'

export const BottomTabWrapper = styled.View`
    position: absolute;
    bottom: 0;
    
    width: 100%;
    height: 56px;
`

export const BottomTabContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    background-color: #ffffff;
`

export const BottomTabItem = styled.TouchableOpacity`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
`

export const BottomTabItemActiveIndicator = styled.View`
    width: 70%;
    height: 4px;
    margin-top: 4px;
    border-radius: 2px;
    background-color: ${props => props.color};
`