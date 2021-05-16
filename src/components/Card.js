import React from 'react'

const Card = ({image,title,description}) => {
    return (
        <div className="flex flex-col lg:w-72 items-center p-10 shadow-xl m-3" style={{backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #f2f4fc 100%)"}}>
            <img className="h-16" src={image.default} alt="" />
            <p className="font-bold my-3">{title}</p>
            <p className="text-center">{description}</p>
        </div>
    )
}

export default Card
