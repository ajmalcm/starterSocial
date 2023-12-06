import React from 'react'
import pfp from "../../imgs/pfp.jpg"

const ProfileCard = () => {
  return (
    <div className='flex items-center gap-2'>
    <img src={pfp} alt="pfp" className='w-[45px] h-[45px] object-contain rounded-full'/>
    <div className='flex flex-col gap-1'>
        <p>firstName</p>
        <p className='text-sm text-slate-500'>lastName</p>
    </div>
    </div>
  )
}

export default ProfileCard