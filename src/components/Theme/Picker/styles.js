import styled from 'styled-components/native'

export const ThemePickerBox = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: ${props => props.active ? '2px' : '1px'} solid ${props => props.active ? props.color : '#000000'};
    border-radius: 24px;
    background-color: ${props => props.active ? '#ffffff' : props.color};
`