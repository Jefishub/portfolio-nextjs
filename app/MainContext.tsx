'use client'

import { Dispatch, SetStateAction, createContext } from 'react';

type MainContextType = {
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export const MainContext = createContext<MainContextType>({
    darkMode: true,
    setDarkMode: () => {}
});
