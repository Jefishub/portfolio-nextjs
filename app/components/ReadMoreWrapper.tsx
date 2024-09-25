'use client'
import { useState } from "react"

export const ReadMoreWrapper = ({ children }: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false)
    return (
        <div onClick={() => setShow(!show)} className="flex flex-col gap-2 cursor-pointer text-justify order-2">
            <div className={` ${show ? '' : 'line-clamp-10 fadeout'}`}>
                {children}
            </div>
            <p className="text-xs">{show ? "show less ↑" : "show more ↓"}</p>
        </div>
    )
}