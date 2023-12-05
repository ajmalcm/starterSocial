import React from "react";
import pfp from "../../imgs/pfp.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import TurnedInNotRoundedIcon from '@mui/icons-material/TurnedInNotRounded';

export const PostCard = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-2 bg-white rounded-md">
      {/* top */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-2">
            <img
              src={pfp}
              alt="user avatar"
              className="rounded-full object-contain w-[45px] h-[45px]"
            />
            <div className="flex flex-col gap-1">
              <p>user1</p>
              <p className="text-sm text-slate-500">2 months ago</p>
            </div>
          </div>
          <MoreHorizIcon fontSize="large" />
        </div>
        <p className="px-4">caption</p>
      </div>
      {/* middle */}
      <div className="w-full">
        <img src={pfp} alt="jj" className="w-full h-full object-contain" />
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-5">
                <FavoriteBorderRoundedIcon fontSize="large"/>
                <ChatBubbleOutlineRoundedIcon fontSize="large"/>
            </div>
            <div>
                <TurnedInNotRoundedIcon fontSize="large"/>
            </div>
      </div>
    </div>
  );
};
