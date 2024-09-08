'use client'
import { useState } from "react"

export const MainText = () => {
    const [show, setShow] = useState(false)
    return (
        <div onClick={() => setShow(!show)} className="flex flex-col gap-2 cursor-pointer">
            <p className={` ${show ? '' : 'line-clamp-10'}`} >
                Welcome! I’m a passionate Software Engineer with a knack for solving
                complex problems using elegant, efficient code. With a strong foundation in physics,
                I bring a unique, analytical approach to software development, blending scientific
                precision with creative solutions.
                <br></br><br></br>
                Specializing in software/web development using javascript/typescript with novel frameworks
                such as Next.js and React, I craft intuitive,
                high-performance web applications that push the boundaries of user experience
                and functionality. My engineering mindset, combined with a love for innovation,
                drives me to build robust digital solutions that make an impact. Let's explore
                what's possible together.
                <br></br><br></br>
                {"with a little help from ChatGPT... of course ;)"}
            </p>
            <p className="text-xs">{show ? "(show less)" : "(show more)"}</p>
        </div>
    )
}