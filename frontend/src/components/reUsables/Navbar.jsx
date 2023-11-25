import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../imgs/logo.png"
const Navbar = () => {
  return (
    <div className='bg-white rounded-t-2xl w-full flex justify-between items-center h-20 '>
    {/* llogo */}
    <div className='flex-[0.2] w-full flex items-center gap-2'>
    <img src={logo} alt="logo" className='object-contain w-[40%]'/>
    <h3 className='font-roboto text-2xl font-bold tracking-wide'>BUDDIES</h3>
    </div>

    {/* searchbar */}

    <div className='flex-[0.5] rounded-2xl bg-slate-100 px-3'>
    <SearchIcon fontSize='large' className='w-[20%]'/>
    <input type='text' placeholder='Search' className='px-2 py-3 w-[80%] outline-none border-none bg-slate-100 ml-3'/>
    </div>

    {/* dots */}
    <div className='flex-[0.15] flex justify-center items-center'>
    <img src={logo} alt='profile' className='w-[50px] object-contain rounded-full'/>
    </div>
    </div>
  )
}

export default Navbar