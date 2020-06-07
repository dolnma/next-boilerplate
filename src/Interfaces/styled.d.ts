// #region Global Imports
import 'styled-components'
// #endregion Global Imports

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            third: string
            fourth: string
        }
    }
}
