import { createContext, useCallback, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => null,
});

export const ThemeContextProvider = ({children}) => {
    
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }, [])

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

    return(
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}