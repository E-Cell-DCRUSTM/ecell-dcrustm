import React from 'react'

const Card = ({imgURL,title,content}) => {
  
  return (
    <div  className="bg-white w-[250px] h-[350px] md:w-[300px]  md:h-[350px]  flex flex-col items-center hover:scale-105 hover:shadow-lg border  border-gray-300 rounded-2xl   md:hover:scale-102 duration-300 ">
     
      <img className='w-[60%]    pt-0' src={imgURL} alt="card-img" />
        <h1 className="font-bold text-3xl text-[#144c8b] ">{title}</h1>
        <p className="text-center text-black px-3 py-2">{content}</p>

    </div>
  )
}

export default Card
