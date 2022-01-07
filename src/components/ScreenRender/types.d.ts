export type ScreenRenderProps = {
    statusBarStyle: 'light-content' | 'dark-content',
    statusBarBackgroundColor?: string,
    statusBarTranslucent?: boolean,
    statusBarAnimated?: boolean,

    wrapperType?: 'default' | 'form' | 'image',
    wrapperCenter?: boolean,
    wrapperBackgroundColor?: string,
}