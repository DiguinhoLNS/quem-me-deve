import React, { Fragment } from 'react'
import { Text } from 'react-native-paper'

import { FilteredSectionProps } from './types'

import Section from '../../../../components/Section'
import ChargeBox from '../../../../components/ChargeBox'

const FilteredSection: React.FC <FilteredSectionProps> = ({ filterName, dates, filteredCharges }) => {

    return(

        <>
            {dates.length > 0 && dates.map((date, index) => (
                <Fragment key = {index}>
                    <Section.Column marginBottom = {8}>
                        <Text>{date}</Text>
                    </Section.Column>
                    {filteredCharges.filter(filtered => filtered.date.day === date).map((item, itemIndex) => (
                        <Section.Column key = {itemIndex} marginBottom = {filteredCharges.length === itemIndex+1 ? 24 : 12}>
                            <ChargeBox data = {item} showIcons />
                        </Section.Column>
                    ))}
                </Fragment>
            )) || (
                <Section.Column center>
                    <Text>Nenhum cobrança marcada como:</Text>
                    <Text>{`"${filterName}"`}</Text>
                </Section.Column>
            )}
        </>

    )

}

export default FilteredSection