import React from 'react'
import cover from '../assets/6.jpeg'
import laptop from '../assets/laptop.jpeg'
import tick from '../assets/tick.png'
import coder from '../assets/2.jpeg'
import shape from '../assets/shape.png'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import board from '../assets/board.jpg'
import think from '../assets/think.jpg'
import bg from '../assets/bg.png'
import Card from '../components/Card'
import left from '../assets/left.jpeg'
import UniSlider from '../sliders/UniSlider'
import MultiSlider from '../sliders/MultiSlider'
import CardSlider from '../sliders/CardSlider'
const HomePage = () => {
    const CardData=[{
        "img":require("../assets/cd1.png"),
        "title":"Front End",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/cd2.png"),
        "title":"Backend",
        "desc":"Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc."
    },{
        "img":require("../assets/cd3.png"),
        "title":"Project Management",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/cd4.png"),
        "title":"Production Deployment",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/c2.png"),
        "title":"Basic Analytics",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/cd6.png"),
        "title":"Soft Skills",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/cd7.png"),
        "title":"Industry Standards",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },{
        "img":require("../assets/cd8.png"),
        "title":"Max Pro Resume",
        "desc":"Students learn to design, develope the UI following UX with industry standards."
    },]
    const UniData=[{
        "img":require("../assets/us1.jpg"),
        "desc":"This is a great opportunity for students coming from tier 2  tier 3 engineering colleges. HiCoder's syllabus looks wholesome as student will have opportunity to do both frontend as well as backend. Happy to see that IT Industry will have a wave of qualilty engineers.",
        "name":"Ashish Vishwakarma",
        "desg":"Software Engineer, Bosch"
    },
    {
        "img":require("../assets/us2.jpg"),
        "desc":"HiCoder is encouraging students to learn engineering. Having production grade development experience on project will reduce onboarding burden on candidates as well as project leads.",
        "name":"Tapas Adhikary",
        "desg":"UI/UX, Micro Focus"
    },
    {
        "img":require("../assets/us3.jpg"),
        "desc":"HiCoder is doing a good job by offering production grade learning. This will enable students to code whole application where students will end up on tech lead position in a few years.",
        "name":"Sudhir Kumar",
        "desg":"Technical Lead, HARMAN International"
    },
    {
        "img":require("../assets/us4.jpg"),
        "desc":"HiCoder didn't exist 15 years ago when I was preparing for software engineering career. In 2002, I had to pay hefty to get basic technical training. Good to see that HiCoder is removing the barrier of high tuition fee and encouraging students towards product focused learning than just teaching specific programming language that generally gets outdated.",
        "name":"Srikant Rahul",
        "desg":"Technical Architect, Hexaware Technologies"
    }
    ]
    return (
        <div className="h-full">
            <div className="h-96 lg:h-full lg:bg-center" style={{backgroundImage: `url(${cover})`,backgroundSize:'cover'}}>
            <div className="h-full p-6 lg:p-56 flex flex-col justify-center">
                <p className="text-blue-900 font-bold text-xs tracking-widing">YOUR TIME, OUR EFFORTS</p>
                <p className="text-3xl lg:text-5xl font-extrabold">Learn Production Grade<br/>Full Stack Development</p>
                <p><button className="px-14 rounded-lg text-blue-900 font-bold text-sm mt-10 py-5 tracking-widest border-2 border-blue-900 hover:bg-blue-900 hover:text-white duration-500 ">KNOW MORE</button></p>
                </div>
            </div>
            <div className="bg-blue-900 text-white lg:pl-28">
                <span className="flex p-10 items-center"><p className="text-xl"> NEXT BATCH: 27 May |</p><p className="ml-2">Apply Now</p>
                </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:mx-40 my-16 mx-4 lg:my-32">
                <div className="flex-1">
                    <img className="flex-1" src={laptop} alt="" />
                </div>
                <div className="flex-1 lg:ml-20 mt-6">
                    <span>
                        <p className="text-gray-500 mb-2">HICODER</p>
                        <p className="text-2xl lg:text-4xl font-extrabold lg:font-bold">We help students learn</p>
                        <p className="text-2xl lg:text-4xl text-blue-900 font-extrabold lg:font-bold mb-10">Full Stack Development.</p>
                    </span>
                    <span>
                        HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.
                    </span>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row  items-center lg:mx-40 lg:my-32 lg:mt-38 mt-40 my-16 mx-4">
                <div className="flex-1">
                    <span>
                        <p className="text-2xl lg:text-4xl font-extrabold mt-10 lg:font-bold">Trained on the most in-demand Technology Skills</p>
                    </span>
                    <div className="mt-10">
                    At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.
                    </div>
                    <ul className="mt-5">
                        <li className="flex items-center"> <img src={tick} className="m-2.5 ml-0 h-4" alt="alt" /> End to End Project Analysis, Design & Development</li>
                        <li className="flex items-center"> <img src={tick} className="m-2.5 ml-0 h-4" alt="alt" /> Authentication, Geo Tracking, Payment Gateway</li>
                        <li className="flex items-center"> <img src={tick} className="m-2.5 ml-0 h-4" alt="alt" /> Analytics, SEO, Data Representation, Industry Standards</li>
                        <li className="flex items-center"> <img src={tick} className="m-2.5 ml-0 h-4" alt="alt" /> Max Pro Resume, Soft Skills, Client Expectation Management</li>
                    </ul>
                    <button className="bg-blue-600 py-3 px-6 text-white rounded-sm mt-8 lg:mt-4">APPLY NOW</button>
                </div>
                <div className="flex-1">
                    <img className="flex-1" src={coder} alt="" />
                </div>
               
            </div>
            <div className="lg:h-96 pb-10 flex flex-col lg:flex-row justify-center bg-blue-900 lg:bg-transparent items-center bg-no-repeat text-white" style={{backgroundImage:`url(${shape})`}}>
                <span className="mx-14 flex flex-col items-center">
                    <img className="h-16 w-16 mt-10 lg:mt-20" src={l1} alt="" />
                    <p className="font-bold text-4xl my-4">34+</p>
                    <p className="font-bold mt-2">PROJECTS COMPLETED</p>
                </span>
                <span className="mx-14 flex flex-col items-center">
                    <img className="h-16 w-16 mt-10 lg:mt-20" src={l2} alt="" />
                    <p className="font-bold text-4xl my-4">47+</p>
                    <p className="font-bold mt-2">INDUSTRY EXPERTS</p>
                </span>
                <span className="mx-14 flex flex-col items-center">
                    <img className="h-16 w-16 mt-10 lg:mt-20" src={l3} alt="" />
                    <p className="font-bold text-4xl my-4">30+</p>
                    <p className="font-bold mt-2">QUALITY DEVELOPERS</p>
                </span>
                <span className="mx-14 flex flex-col items-center">
                    <img className="h-16 w-16 mt-10 lg:mt-20" src={l4} alt="" />
                    <p className="font-bold text-4xl my-4">40,000,00 +</p>
                    <p className="font-bold mt-2">APPLICATION USERS</p>
                </span>
            </div>
            <div className="flex  flex-col-reverse lg:flex-row items-center lg:mx-40 lg:my-32 lg:mt-38 my-16 mx-4">
                <div className="flex-1">
                    <div className="flex flex-col mr-20">
                    <span className="mb-10">
                        <p className="text-2xl lg:text-4xl font-extrabold mt-5 lg:mt-0 lg:font-bold mb-5">Why HiCoder?</p>
                        <p>HiCoder enables students to think about real-world problems, design, and develop the right solution. <b className="cursor-pointer text-blue-600"> know more</b> </p>
                    </span>
                        <span className="flex flex-col lg:flex-row mb-8">
                            <img className="w-20 h-20 mr-5" src={c1} alt="" />
                            <span>
                                <p className="font-bold text-2xl mb-2">Personalized Training</p>
                                <p>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</p>
                            </span>
                        </span>
                        <span className="flex flex-col lg:flex-row">
                            <img src={c2} className="h-20 w-20 mr-5" alt="" />
                            <span>
                                <p className="font-bold text-2xl mb-2">Production Projects</p>
                                <p>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</p>
                            </span>
                        </span>

                    </div>                    
                </div>
                <div className="flex-1">
                    <img className="flex-1" src={board} alt="" />
                </div>
               
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:mx-44 lg:my-32 mx-4 mb-20">
                <div className="flex-1 lg:mr-14">
                    <img className="" src={think} alt=""/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 text-2xl lg:text-4xl font-extrabold lg:font-bold mt-10 lg:mt-0">How does HiCoder help?</p>
                    <p className="mb-10 font-bold text-gray-500">HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</p>
                    <p>
                        HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.
                    </p>
                    <button className="mt-10 bg-blue-900 text-white px-6 py-3 rounded-sm font-bold">KNOW MORE</button>
                </div>
            </div>
            <div className="bg-no-repeat bg-cover h-full flex flex-col items-center bg-gray-50 lg:bg-transparent" style={{backgroundImage:`url(${bg})`}}>
                <p className="text-gray-500 mb-3 mt-10 lg:mt-0">WHAT YOU LEARN</p>
                <p className="text-2xl lg:text-4xl font-extrabold lg:font-bold">at HiCoder is useful</p>
                <p className="text-2xl lg:text-4xl text-blue-900 font-extrabold lg:font-bold mb-10 mt-2">Technology, Management & more</p>
                <div className="flex flex-wrap justify-center">
                    {CardData.map((d)=>{return(
                        <Card image={d.img} title={d.title} description={d.desc} />
                    )})}
                </div>
            </div>
            <div className="bg-blue-50 pt-20 flex flex-col items-center pb-20 ">
                <p className="text-blue-500 font-semibold">THOUGHTS ON HICODER SYLLABUS</p>
                <p className="text-2xl lg:text-4xl mt-2 mb-10 font-extrabold lg:font-bold">Reviews by Industry Experts</p>
                <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <img className="" src={left} alt="" />
                    </div>
                    <div className="flex-1 w-screen lg:w-96 bg-white flex">
                    <UniSlider data={UniData}/>
                    </div>
                </div>
            </div>
            <div className="bg-blue-900 flex flex-col items-center pb-10">
                <p className="text-4xl my-12 text-white font-bold">Partners & Associates</p>
                <div className="w-3/4">
                <MultiSlider/>
                </div>
            </div>
            <div className="py-20 lg:py-0 lg:my-20 bg-no-repeat bg-cover bg-gray-50 lg:bg-transparent" style={{backgroundImage:`url(${bg})`}}>
                <div className="flex flex-col items-center ">
                    <p className="text-gray-500">NEWS</p>
                    <p className="text-2xl lg:text-4xl text-center font-extrabold lg:font-bold lg:mt-6">#COVID19 Demands more full stack developers.</p>
                    <p className="text-2xl lg:text-4xl font-extrabold lg:font-bold text-blue-900 mb-8 lg:mb-0">& Industry Updates</p>
                </div>
                <div className="lg:m-36">
                <CardSlider/>
                </div>   
            </div>
        </div>
    )
}

export default HomePage
