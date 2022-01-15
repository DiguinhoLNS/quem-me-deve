import React from 'react'

import { SectionProps } from '../types'

import { SectionRow } from '../styles'

const Row: React.FC <SectionProps> = props => {

    return <SectionRow {...props}>{props.children}</SectionRow>

}

export default Row