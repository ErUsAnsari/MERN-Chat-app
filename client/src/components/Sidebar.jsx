import React, { useContext } from "react";
import assets, { userDummyData } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div
      className={`backdrop-blur-xl border shadow-2xl bg-[#F8FAFC] border-r border-solid border-[#E2E8F0]  h-full p-5 rounded-r-xl overflow-y-scroll text-[#0F172A] ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 cursor-pointer"
            />
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#EFF6FF] hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p
                onClick={() => logout()}
                className="cursor-pointer text-sm text-[#EF4444] hover:bg-[#FEE2E2]"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] border border-gray-500 rounded-full flex items-center gap-2 py-3 px-4 mt-5">
          <img src={assets.search_icon} alt="search" className="w-3" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-[#FFFFFF] focus:ring-4 focus:ring-blue-600/10 border-slate-200 outline-none border-1px border-solid text-[#0F172A] text-xs placeholder-[#0F172A] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={() => setSelectedUser(user)}
            key={index}
            className={`text-sm font-bold text-slate-800 transition-colors cursor-pointer p-3 rounded-xl mx-2 relative flex items-center gap-2 pl-4 max-sm:text-sm hover:bg-[#EFF6FF] ${
              selectedUser?._id === user._id && "bg-[#282142]/50"
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className="w-8.75 aspect-square rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-[#22C55E] text-xs">Online</span>
              ) : (
                <span className="text-[#94A3B8] text-xs">Offline</span>
              )}
            </div>
            {index > 2 && (
              <p className="bg-linear-to-tr from-blue-600 to-blue-400 text-[10px] h-5 w-5 flex items-center justify-center rounded-full text-white font-bold absolute top-4 right-4 text-xs bg-[#2563EB]">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
