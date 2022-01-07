import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'

import { SheetProps } from './types'

const Sheet: React.FC <SheetProps> = ({ children, sheetRef }) => {

    return(

        <RBSheet
            ref = {sheetRef}
            closeOnDragDown = {true}
            closeOnPressMask = {true}
            openDuration = {300}
            closeDuration = {300}
            height = {100}
            customStyles = {{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.4)"
                },
                draggableIcon: {
                    backgroundColor: "grey"
                },
                container: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16
                }
            }}
        >{children}</RBSheet>

    )

}

export default Sheet