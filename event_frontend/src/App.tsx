import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import API from './API'
import Header from './components/Header';
import EventCard from './components/EventCard';

export type EventType = {
  id: string,
  name: string,
  location: string,
  participants: number,
  availability: number
}

function App() {

  const[events,setEvents] = useState<[] | EventType[]>([]);

  const fetchData = async() =>{
    try {
      const eventDetails = await fetch(`http://localhost:9000/events`);
      const eventResponse = await eventDetails.json();
      setEvents(eventResponse);
      console.log(eventResponse)
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className='flex flex-col h-[100vh] w-full flex-wrap'>
      <Header/>
      <div className='hidescroll w-full flex flex-row items-center text-black mt-10 gap-10 overflow-x-auto h-32 p-10'>
        {events.map((event, index) => (
          <EventCard event={event} key={index}/>
        ))}
      </div>

    </div>
  )
}

export default App
