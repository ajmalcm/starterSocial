import React from "react";
import pfp from "../../imgs/pfp.jpg"
const Home = () => {
  return (
    
      <section className="flex gap-2 w-full border-2 min-h-[80vh] p-3 max-medium:flex-col">
        {/* left */}
        <div className="flex-[0.7] flex flex-col gap-3">
          {/* left top */}
          <div className="flex gap-3 bg-white p-2 shadow-xl rounded-md items-center justify-between">
            <img src={pfp} alt="user pfp" className="object-contain max-w-[50px] rounded-full flex-[0.1]"/>
            <button className="bg-slate-100 p-3 flex-[0.9] rounded-xl text-gray-400">Hi, user1 what,s on your mind</button>
          </div>
          {/* left bottom */}
          <div className="w-full">
            <img src={pfp} alt="jj" className="w-full h-full object-contain"/>
          </div>
        </div>

        {/* right */}
        <div className="flex-[0.3]">
          right
        </div>
      </section>
  );
};

export default Home;
