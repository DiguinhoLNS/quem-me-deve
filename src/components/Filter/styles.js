import styled from 'styled-components/native'
import hexToRGB from '../../utils/hexToRGB'

export const FilterItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    padding: 0 8px;
    border: 2px solid ${props => props.active ? props.color : '#aaa'};
    border-radius: 12px;
    background-color: ${props => props.active ? `rgba(${hexToRGB(props.color)}, 0.1)` : '#fff'};
`