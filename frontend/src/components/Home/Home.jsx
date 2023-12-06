import React from "react";
import pfp from "../../imgs/pfp.jpg"
import { PostCard } from "../reUsables/PostCard";
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import ProfileCard from "../reUsables/ProfileCard";
import SuggestionCard from "../reUsables/SuggestionCard";
const Home = () => {
  return (
    
      <section className="flex gap-4 w-full min-h-[80vh] max-medium:flex-col font-mono">
        {/* left */}
        <div className="flex-[0.7] flex flex-col gap-3">
          {/* left top */}
          <div className="flex gap-3 bg-white p-2 shadow-xl rounded-md items-center justify-between">
            <img src={pfp} alt="user pfp" className="object-contain max-w-[50px] rounded-full flex-[0.1]"/>
            <button className="bg-slate-100 p-3 flex-[0.9] tracking-widest rounded-xl text-gray-400">Hi, user1 what,s on your mind</button>
          </div>
          {/* left bottom */}
          <div className="w-full mb-2 shadow-2xl">
          <PostCard/>
          </div>
        </div>

        {/* right */}
        <div className="flex-[0.3] flex flex-col gap-2 items-center">
          {/* top */}
          <div className="w-full bg-white rounded-md shadow-lg p-2">
            <ProfileCard/>
          </div>
          {/* mid */}
          <div className="flex justify-between w-full items-center">
            <h2 className="text-xl ">Suggestions for you</h2>
            <ReplayRoundedIcon fontSize="large"/>
          </div>
          {/* bottom */}
          <div className="flex flex-col gap-1 w-full">
              <SuggestionCard/>
              <SuggestionCard/>
              <SuggestionCard/>
              <SuggestionCard/>
              <SuggestionCard/>
          </div>
        </div>
      </section>
  );
};

export default Home;
