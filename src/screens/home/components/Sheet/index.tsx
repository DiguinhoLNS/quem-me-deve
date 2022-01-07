import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'

import { SheetProps } from './types'

const Sheet: React.FC <SheetProps> = ({ children, sheetRef, onClose }) => {

    const animationDuration = 350

    return(

        <RBSheet
            ref = {sheetRef}
            closeOnDragDown = {true}
            closeOnPressMask = {true}
            openDuration = {animationDuration}
            closeDuration = {animationDuration}
            height = {200}
            customStyles = {{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.4)"
                },
                draggableIcon: {
                    backgroundColor: "grey"
                },
                container: {
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24
                }
            }}
            onClose = {() => onClose ? onClose() : null}
        >{children}</RBSheet>

    )

}

export default Sheet