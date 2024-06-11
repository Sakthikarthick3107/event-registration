import { ChangeEvent, useEffect, useState } from 'react'

import API from './API'
import { useSelector , useDispatch } from 'react-redux';
import Header from './components/Header';
import EventCard from './components/EventCard';
import { State } from './redux/reducers';
import LineInput from './components/LineInput';
import { EventType } from './types/types';
import { setRegisteredDetails , setEvent, setNotificationMessage, hideNotification, showNotificationPop} from './redux/actions';
import Notification from './components/Notification/Notification';
import bgImage from '../src/assets/bgimg.jpg';



function App() {
  const {selectedEvent , registeredDetails , showNotification , notificationMessage } : State  = useSelector<State>(state => state);
  const dispatch = useDispatch();
  const[events,setEvents] = useState<[] | EventType[]>([]);
  const[selectedEventId , setSelectedEventId] =  useState<string>("");
  const[formData, setFormData] = useState({
                                              name: "",
                                              email: "",
                                              eventId: selectedEvent ? selectedEvent.id : ""
                                            })

  const fetchData = async() => {
    try {
      const eventDetails = await fetch(`http://localhost:9000/events`);
      const eventResponse = await eventDetails.json();
      setEvents(eventResponse);
      console.log(eventResponse)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() =>{
    if(selectedEvent){
      setFormData({...formData , eventId : selectedEvent.id})
    }
  },[selectedEvent])


  
  const handleFormChange = (e : ChangeEvent<HTMLInputElement>) => {
    const{name,value} = e.target;
    setFormData({...formData, [name] : value})
    }
      

  const registerEvent = async(e) => {
    e.preventDefault();
    await setFormData({...formData , eventId : selectedEvent ? selectedEvent.id : ""});
    try {
      const registerDetails = await fetch('http://localhost:9000/participants',{
        method:'post',
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(formData)
      });

      const registerResponse = await registerDetails.json();
      console.log(registerResponse)
      if(registerDetails.status === 400){
        dispatch(setNotificationMessage(registerResponse.err));
        dispatch(showNotificationPop());        
      }
      else if(registerDetails.status === 200){
        dispatch(setNotificationMessage("Registered successfully"));
        dispatch(showNotificationPop()); 
        setFormData({name : "" , email : "" , eventId : ""});
        dispatch(setEvent(null));
      }
      setTimeout(() =>{
        dispatch(hideNotification())
      }, 4000);

    } catch (error) {
      console.log(error)
    }
  }

  const getRegisteredDetails = async() => {
    let registeredUrl = 'http://localhost:9000/participants';
    if(selectedEventId !== ''){
      registeredUrl += `/event/${selectedEventId}`
    }
    try {
      const registeredRequest = await fetch(registeredUrl);
      const registeredResponse = await registeredRequest.json();
      dispatch(setRegisteredDetails(registeredResponse));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    getRegisteredDetails();
  },[registeredDetails , selectedEventId])

  return (
    <div style={{backgroundImage : `url(${bgImage})` , backgroundSize:'cover'}} className={`flex flex-col h-[100vh] w-[100vw] flex-wrap  bg`}>
      <Header/>
      <div className='hidescroll w-full flex flex-row items-center text-black mt-10 gap-10 overflow-x-auto h-32 p-10'>
        {events.map((event, index) => (
          <EventCard event={event} key={index}/>
        ))}
      </div>

      <div className='flex flex-col w-full items-center p-10'>
        {selectedEvent ? 
          <form onSubmit={registerEvent} action='' className=' w-1/2  bg-text/90 shadow-lg rounded-lg flex flex-col flex-wrap p-8'>
          
            <button onClick={() => dispatch(setEvent(null))} className='text-right cursor-pointer text-red-600 text-xl font-bold'>&#x2715;</button>
            <LineInput required={true} placeholder='Enter your name' name='name' onChange={handleFormChange}  type='text' value={formData.name}/>
            <LineInput required={true} placeholder='Email id here' name='email' onChange={handleFormChange} type='text' value={formData.email}/>

            <p>Event Details</p>
            <p className='font-semibold'>{selectedEvent.name} - Event id {selectedEvent.id}</p>
            <button 
            // onClick={registerEvent} 
            type='submit' className='px-4 py-2 bg-blue-500 my-2 text-text text-lg'>Register</button>
            
          
          </form>
          :
          <div className='w-[70vw] h-[60vh] overflow-y-auto bg-text/90 shadow-lg rounded-lg flex flex-col p-8'>
              
              <div className='w-full flex flex-row items-center justify-between'>
                <p className='text-center text-lg'>Registered Candidates</p>
                <select value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)}  name="Event" id="event">
                  <option value="">-- All --</option>
                  {events.map((eventId , index) => (
                    <option key={index} value={eventId.id}>{eventId.id}</option>
                  ))}
                </select>
              </div>
              <>
              {registeredDetails.length === 0 ? 
              <p className='my-10 text-center font-bold text-xl'>No candidates registered for this event</p> :
              <table className=''>
                <thead>
                  <tr className=''>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Event</th>
                    <th>Event Id</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredDetails.map((participants,index) => (
                    <tr key={index}>
                      <td>{participants.name}</td>
                      <td>{participants.email}</td>
                      <td>{participants.event.name}</td>
                      <td>{participants.event.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              }
              </>
          </div>

         
        }
        <Notification message={notificationMessage} isNotificationShown={showNotification}/>
      </div>
    </div>
  )
}

export default App
