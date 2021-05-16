import React from 'react'
import logo from '../assets/logo.png'
import footerbg from '../assets/footerbg.jpg'
import fc from '../assets/fc.png'
import fm from '../assets/fm.png'
import fs from '../assets/fs.png'
import fl from '../assets/fl.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/in.png'
import twitter from '../assets/twitter.png'
const Footer = () => {
    return (
        <div className="flex flex-col px-4 lg:px-52 pt-20 pb-10" style={{backgroundImage:`url(${footerbg})`}}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex flex-col items-start">
                    <img className="w-24 lg:w-40" src={logo} alt="" />
                    <span className="mt-5">HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</span>
                    <button className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-sm mt-5">APPLY NOW</button>
                </div>
                <div className="flex-1 mt-10 lg:mt-0 flex flex-col lg:items-center">
                    <p className="mb-5 font-bold text-blue-900 text-2xl">Info</p>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="flex-1 flex mt-10 lg:mt-0 flex-col items-start">
                    <p className="mb-5 font-bold text-blue-900 text-2xl">Contact</p>
                    <p className="flex items-center mb-3">
                    <img src={fl} className="h-5 pr-6" alt="" />
                    <p>264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</p>

                    </p>
                    <p className="flex items-center mb-3">
                        <img src={fs} className="h-5 pr-6" alt="" />
                        <a href="tel:+919206980980">(+91) 9206 980 980</a>
                    </p>
                    <p className="flex items-center mb-3">
                    <img src={fm} className="h-5 pr-6" alt="" />
                    <a href="mailto:hello@hicoder.in">hello@hicoder.in</a>
                    </p>
                    <p className="flex items-center">
                    <img src={fc} className="h-5 pr-6" alt="" />
                    <p>10:00AM - 06:00PM</p>
                    </p>
                    
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between border-t-2 border-blue-900 border-opacity-30 mt-16 pt-10">
                <div className="text-center lg:text-left mb-5 lg:mb-0">
                    <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
                    <p>Privacy Policy | Terms of Service | * Registration Charges Applied</p>
                </div>
                <div className="flex items-center">
                    <div className="bg-blue-900 p-2 rounded-md mx-1">
                    <img className="h-5" src={facebook} alt="" />
                    </div>
                    <div className="bg-blue-900 p-2 rounded-md mx-1">
                    <img className="h-5" src={instagram} alt="" />
                    </div>
                    <div className="bg-blue-900 p-2 rounded-md mx-1">
                    <img className="h-5" src={twitter} alt="" />
                    </div>
                    <div className="bg-blue-900 p-2 rounded-md mx-1">
                    <img className="h-5" src={linkedin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
