import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";


export const ContextProvider = createContext()

export const Context = ({ children }) => {
    const [menuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <ContextProvider.Provider value={{ isMobile, setIsMenuOpen, menuOpen }}>
            {children}
        </ContextProvider.Provider>
    )
}