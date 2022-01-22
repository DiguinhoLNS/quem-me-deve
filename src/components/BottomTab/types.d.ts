import { MainRouteParams } from "../../routes/types"

export type BottomTabProps = {
    state: any
    navigation: any
}

export type BottomTabItemProps = {
    icon: string
    route: keyof MainRouteParams
    active: boolean
}