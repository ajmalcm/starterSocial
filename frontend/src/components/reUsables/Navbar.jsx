import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../imgs/logo.png"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
const Navbar = () => {
  return (
    <div className='bg-white rounded-t-2xl w-full flex justify-between items-center h-20 max-medium:h-28 max-medium:flex-col max-medium:p-2 shadow-md mb-4'>
    {/* llogo */}
    <div className='flex-[0.2] w-full flex items-center gap-2 max-medium:hidden'>
    <img src={logo} alt="logo" className='object-contain w-[75px]'/>
    <h3 className='font-roboto text-2xl font-bold tracking-wide'>BUDDIES</h3>
    </div>

    {/* searchbar */}

    <div className='flex-[0.4] max-medium:flex-1 rounded-2xl bg-slate-100 px-3 max-medium:w-full'>
    <SearchIcon fontSize='large' className='w-[20%]'/>
    <input type='text' placeholder='Search' className='px-2 py-3 w-[80%] outline-none border-none bg-slate-100 ml-3'/>
    </div>

    {/* dots */}
    <div className='flex-[0.2] max-medium:flex-1 flex justify-between items-center max-medium:w-full'>
    <HomeRoundedIcon fontSize='large'/>
    <ExploreRoundedIcon fontSize='large'/>
    <FavoriteBorderRoundedIcon fontSize='large'/>
    <img src={logo} alt='profile' className='w-[50px] object-contain rounded-full bg-slate-50'/>
    </div>
    </div>
  )
}

export default Navbar