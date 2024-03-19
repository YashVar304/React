import React,{useContext} from 'react'
export const themeContext = React.createContext({
    themeMode:"light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const ThemeContextProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}
