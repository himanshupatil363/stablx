import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call.png'
import clock from '../assets/clock.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/in.png'
import twitter from '../assets/twitter.png'
const Titlebar = () => {
    return (
        
        <div className="bg-blue-900 hidden lg:flex justify-between text-white px-40">
            <div className="flex">
                <p className="m-3 flex items-center">
                    <img src={email} className="h-5 px-2" alt="" />
                    <a href="mailto:hello@hicoder.in">hello@hicoder.in</a>
                </p>
                <p className="m-3 flex items-center">
                    <img src={call} className="h-5 px-2" alt="" />
                    <a href="tel:+919206980980">(+91) 9206 980 980</a>
                </p>
            </div>
            <div className="flex items-center">
                    <p className="flex items-center"><img src={clock} className="px-2 h-4" alt="" /> Mon - Fri: 10:00am - 06.00pm</p>
                    <p className="flex pl-5">
                        <a href="https://www.facebook.com"><img className="px-2 h-4" src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com"><img className="px-2 h-4" src={instagram} alt="" /></a>
                        <a href="https://www.twitter.com"><img className="px-2 h-4" src={twitter} alt="" /></a>
                        <a href="https://www.linkedin.com"><img className="px-2 h-4" src={linkedin} alt="" /></a>
                    </p>
            </div>
        </div>
    )
}

export default Titlebar
