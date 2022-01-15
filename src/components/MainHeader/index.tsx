import React from 'react'

import * as S from './styles'

const MainHeader: React.FC = props => {

    return(

        <S.Header>
            <S.HeaderContent>{props.children}</S.HeaderContent>
        </S.Header>

    )

}

export default MainHeader