import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
       () => localStorage.getItem('darkMode') === 'true'
    )

    useEffect(() =>{
        const root = window.document.documentElement
        if(darkMode){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(prev => !prev)

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
    )
};
 