/* eslint-disable @typescript-eslint/no-empty-object-type */

// Tipagem do tema default -> autoComplet 

import 'styled-components'
import { defaultTheme } from "../styeles/thems/default";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {

    export interface DefaultTheme extends ThemeType {}
} 