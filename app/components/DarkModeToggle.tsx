'use client'
import { useContext } from "react";
import { MainContext } from "../MainContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(MainContext)
    return <button
        title={darkMode ? 'dark' : 'light'}
        aria-label='Darkmode'
        color={'dark'}
        onClick={() => setDarkMode(prev => !prev)}
        className="items-center">
        {darkMode
            ? <MdOutlineDarkMode className="size-4" />
            : <MdDarkMode className="size-4" />}
    </button>
}