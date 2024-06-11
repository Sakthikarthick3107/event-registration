import React, { useState } from 'react'
import './notification.css';

type NotificationType = {
    message : string,
    isNotificationShown :  boolean
}

const Notification = ({message , isNotificationShown } : NotificationType) => {


  return (
    <div className={`fixed  transition  duration-500 ease-in-out ${isNotificationShown ? 'translate-x-0' : ' translate-x-[200%]'}
                    bottom-10 
                    right-10 
                    min-h-20 
                    w-[400px]
                 bg-black/80 
                    shadow-md 
                    rounded-lg 
                    text-text p-2`}>
        <p className='font-bold'>Notification</p>
        <p className='font-thin'>{message}</p>
    </div>
  )
}

export default Notification