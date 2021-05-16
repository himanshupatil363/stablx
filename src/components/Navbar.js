import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Hamburger from './Hamburger'
import menu from '../assets/menu.png'
const Navbar = ({classes}) => {
    const [n1, setn1] = useState(false)
    const [n2, setn2] = useState(false)
    const [n3, setn3] = useState(false)
    const [drop,setDrop] = useState(false)
    return (
        <div className={classes}>
            <div className="hidden lg:flex lg:items-center lg:justify-between mx-28">
                <img className="w-44 m-6" src={logo} alt="" />
                <div className="flex items-center">
                <div className="flex items-center">
                    <div className="flex flex-col"><p className={"mx-4 "+(n1?"text-blue-900":"text-black")} onMouseEnter={()=>setn1(true)} onMouseLeave={()=>setn1(false)}>HICODER {n1?("-"):("+")}</p>
                    {n1&&(<div className="text-white absolute mt-16 pl-10 pr-20 py-4 bg-blue-900 flex flex-col">
                        <p className="p-2">About</p>
                        <p className="p-2">Contact</p>
                        <p className="p-2">Blog</p>
                    </div>)}
                    </div>
                    <div className="flex flex-col">
                    <p className={"mx-4 "+(n2?"text-blue-900":"text-black")} onMouseEnter={()=>setn2(true)} onMouseLeave={()=>setn2(false)}>COURSE {n2?("-"):("+")}</p>
                    {n2&&(<div className="text-white absolute mt-16 pl-10 pr-20 py-4 bg-blue-900 flex flex-col">
                        <p className="p-2">What You Learn?</p>
                        <p className="p-2">How To Apply</p>
                        <p className="p-2">Fee Structure</p>
                        <p className="p-2">Apply</p>
                        <p className="p-2">FAQ</p>
                    </div>)}
                    </div>
                    <div className="flex flex-col">
                    <p className={"mx-4 "+(n3?"text-blue-900":"text-black")} onMouseEnter={()=>setn3(true)} onMouseLeave={()=>setn3(false)}>HIRE {n3?("-"):("+")}</p>
                    {n3&&(<div className="text-white absolute mt-16 pl-10 pr-20 py-4 bg-blue-900 flex flex-col">
                        <p className="p-2">Hire</p>
                        <p className="p-2">Student Projects</p>
                        <p className="p-2">Partner & Associates</p>
                    </div>)}
                    </div>
                    <button className="mx-6 bg-blue-900 text-white px-5 py-1">APPLY NOW</button>
                </div>
                <Hamburger/>
                </div>
            </div>
            <div className="flex items-center lg:hidden justify-between bg-white">
                <img className="w-44 p-2" src={logo} alt="" />
                <p className="cursor-pointer" onClick={()=>{setDrop(!drop)}}> <img className="h-10 mx-5" src={menu} alt="" /></p>
            </div>
            {drop&&(<div className=" text-white absolute w-full flex flex-col bg-blue-900">
                <p className="p-3 border-b border-white border-opacity-20">HICODER</p>
                <p className="p-3 border-b border-white border-opacity-20">COURSE</p>
                <p className="p-3 border-b border-white border-opacity-20">HIRE</p>
            </div>)}
        </div>
    )
}

export default Navbar
