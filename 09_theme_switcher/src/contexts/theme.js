import { createContext, useContext } from "react";

// Here, in createContext we're passing an object as default context
// so that when we use ThemeContext then by default light theme comes. and app doesn't crash.
export const ThemeContext = createContext({
    themeMode : "light",
    lightTheme : () => {},
    darkTheme : () => {},
})


// let's create provider in same file only instead of creating new file and importing ThemeContext there.
export const ThemeProvider = ThemeContext.Provider


// Our custom hook for directly using ThemeContext without need to import ThemeContext and useContext

export default function useTheme(){
    return useContext(ThemeContext)
}