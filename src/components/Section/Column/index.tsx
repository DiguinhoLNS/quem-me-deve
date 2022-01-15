import React from 'react'

import { SectionProps } from '../types'

import { SectionColumn } from '../styles'

const Column: React.FC <SectionProps> = props => {

    return <SectionColumn {...props}>{props.children}</SectionColumn>

}

export default Column