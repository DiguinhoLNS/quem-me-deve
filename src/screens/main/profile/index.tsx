import React from 'react'

import ScreenRender from '../../../components/ScreenRender'
import MainHeader from '../../../components/MainHeader'

const Profile: React.FC = () => {

    return(

        <>
            <ScreenRender statusBarStyle = "dark-content" wrapperMarginTop = {false}>
                <MainHeader></MainHeader>
            </ScreenRender>
        </>

    )

}

export default Profile