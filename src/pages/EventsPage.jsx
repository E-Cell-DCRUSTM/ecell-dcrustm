import React from 'react'
import EventCard from '../components/EventCard'
import EventsData from '../components/EventsData'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset:250,
  duration:1000,
});

const EventsPage = () => {
  return (
   

    
    <div   className="  max-w-[1240px] mx-auto mt-28 mb-10">
      <h1  className="md:text-6xl text-[2.5rem] text-[#144c8b] font-bold font-grotesk tracking-tighter pt-8 text-center">Our Events</h1>
      <div className="grid grid-cols-1  mt-10 md:grid-cols-3 gap-9 ">
         {
            EventsData.map((item)=>
              <EventCard title={item.title} description={item.description} imgURL={item.imgURL} />
            )
         }
         
      </div>
    </div>
    
  )
}

export default EventsPage
