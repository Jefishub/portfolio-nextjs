'use client'
import { useState } from "react"

export const ReadMoreWrapper = ({ children }: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false)
    return (
        <div onClick={() => setShow(!show)} className="flex flex-col gap-2 cursor-pointer md:cursor-default text-justify">
            <div className={` ${show ? '' : 'line-clamp-12 fadeout'}`}>
                {children}
            </div>
            <p className="text-xs md:hidden">{show ? "show less ↑" : "show more ↓"}</p>
        </div>
    )
}