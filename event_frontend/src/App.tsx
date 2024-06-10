import { ChangeEvent, useEffect, useState } from 'react'

import API from './API'
import { useSelector } from 'react-redux';
import Header from './components/Header';
import EventCard from './components/EventCard';
import { State } from './redux/reducers';
import LineInput from './components/LineInput';

export type EventType = {
  id: string,
  name: string,
  location: string,
  participants: number,
  availability: number
}

function App() {
  const selectedEvent : EventType = useSelector<State>(state => state.selectedEvent);

  const[events,setEvents] = useState<[] | EventType[]>([]);
  const[formData, setFormData] = useState({
                                              name: "",
                                              email: "",
                                              eventId: selectedEvent ? selectedEvent.id : ""
                                            })

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

  const handleFormChange = (e : ChangeEvent<HTMLInputElement>) => {
    const{name,value} = e.target;
    setFormData({...formData, [name] : value})
  }

  return (
    <div className='flex flex-col h-[100vh] w-full flex-wrap'>
      <Header/>
      <div className='hidescroll w-full flex flex-row items-center text-black mt-10 gap-10 overflow-x-auto h-32 p-10'>
        {events.map((event, index) => (
          <EventCard event={event} key={index}/>
        ))}
      </div>

      <div className='flex flex-col w-full items-center p-10'>
        {selectedEvent && 
          <div className=' w-1/2  bg-text shadow-lg rounded-lg flex flex-col p-8'>

            <LineInput placeholder='Enter your name' name='name' onChange={handleFormChange}  type='text' value={formData.name}/>
            <LineInput placeholder='Email id here' name='email' onChange={handleFormChange} type='text' value={formData.email}/>

            <p>Event Details</p>
            <p className='font-semibold'>{selectedEvent.name} - Event id {selectedEvent.id}</p>
            <button className='px-4 py-2 bg-blue-500 my-2 text-text text-lg'>Register</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App
