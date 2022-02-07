import Colors from 'constant/Colors';
import React from 'react'
import { ThemeProvider } from './context/ThemeProvider';
export default function useThemeColors() {
    const { theme } = React.useContext(ThemeProvider);
    // console.log(theme)
    const bg = theme ? Colors.black : Colors.white
    const txt = theme ? Colors.white : Colors.black

    return { bg, txt }
}


