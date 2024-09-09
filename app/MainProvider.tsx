'use client';

import { MainContext } from "./MainContext";
import { useMemo, useState } from "react";

interface MainProviderProps {
    children: React.ReactNode;
}
export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true)
    const contextValue = useMemo(() => ({
        darkMode,
        setDarkMode

    }), [darkMode]);

    return (
        <MainContext.Provider value={contextValue}>
            <div className={darkMode ? "dark dark:text-white text-black bg-white dark:bg-black"  : "dark:text-white text-black bg-white dark:bg-black"}>
                {children}
            </div>
        </MainContext.Provider>
    );
};