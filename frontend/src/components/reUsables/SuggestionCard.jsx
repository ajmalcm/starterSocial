import React from 'react'
import ProfileCard from './ProfileCard'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center bg-white p-2'>
    <ProfileCard/>
    <button className='p-2 bg-transparent border-cyan-500 text-cyan-500 rounded-lg border-2 hover:border-red-400 hover:text-red-400 transition-all ease-in-out delay-300'>Follow</button>
    </div>
  )
}

export default SuggestionCard