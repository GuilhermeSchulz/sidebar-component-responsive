"use client"
import { useState } from "react"
import { BiArrowFromRight, BiArrowFromLeft, BiArrowFromTop, BiArrowFromBottom } from "react-icons/bi"

export const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={` md:h-[100%] md:w-[300px] w-[100%] h-[100px] bg-indigo-900 transition ease-linear duration-200 relative ${open ? "md:translate-x-[-90%] md:translate-y-[0] translate-y-[-90%]" : ""}`}>
            <nav className="md:h-[65%] h-[100%] md:w-[300px] w-[100%] bg-indigo-900 flex md:flex-col justify-between items-center text-white p-5 text-center">
                <h1 className="text-2xl font-bold md:mb-[30px]">Logo</h1>

                <ul className="flex md:flex-col gap-5">
                    <li className="cursor-pointer active:font-bold"><a>Inicio</a></li>
                    <li className="cursor-pointer active:font-bold"><a>Sobre</a></li>
                    <li className="cursor-pointer active:font-bold"><a>Tecnologias</a></li>
                    <li className="cursor-pointer active:font-bold"><a>Contato</a></li>
                </ul>

            </nav>
            <button className="h-[35px] w-[35px] absolute cursor-pointer md:top-[50%] bottom-[-15%] md:right-[-5%] right-[50%] transition ease-linear duration-200  bg-indigo-900 text-white p-[10px] rounded-full" onClick={() => setOpen(!open)}>{open ? (<><BiArrowFromRight className="md:block hidden" /><BiArrowFromTop className="block md:hidden" /></>) : (<><BiArrowFromLeft className="md:block hidden" /> <BiArrowFromBottom className="block md:hidden" /></>)} </button>
        </div >
    )
}