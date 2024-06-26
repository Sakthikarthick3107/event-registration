import React from 'react'
import { EventType } from '../App';
import { useDispatch } from 'react-redux';
import { hideNotification, setEvent, setNotificationMessage, showNotificationPop } from '../redux/actions';

const EventCard = ({event} :{event: EventType}) => {

  const dispatch = useDispatch();

  const handleFull = () => {
    dispatch(setNotificationMessage('Sorry , This program is almost full !'))
    dispatch(showNotificationPop());
    setTimeout(() => {
      dispatch(hideNotification());
    },4000)
  }
 
  return (
    <div  className='bg-gray-100/70 flex flex-col items-center shadow-md min-w-[300px] w-[300px] rounded-lg px-4 py-2'>
        <p className='text-lg font-bold'>{event.name}</p>
        <p>{event.location}</p>
        <p className='text-sm'>Availability {event.availability} / {event.participants}</p>

        {event.availability === 0 ? 
            <button onClick={handleFull} className=' bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 text-text rounded-md shadow-md'>Full</button>
        :
            <button onClick={()=> dispatch(setEvent(event))} className=' bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 text-text rounded-md shadow-md'>Apply</button>
        }
        
    </div>
  )
}

export default EventCard