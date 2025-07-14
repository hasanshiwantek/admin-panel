import React from "react";
import styles from "@/style/Header/Header.module.css";
import { Bell, HelpCircle } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import HelpDropdown from "../dropdowns/HelpDropdown";
const Header: React.FC = () => {
  return (
    <header
      className="w-full h-22 px-4 flex items-center justify-between relative z-40"
      style={{ backgroundColor: "var(--header-bg)" }}
    >
      {/* Left: Logo & Company Name */}
      <div className="flex items-center gap-2 !ml-10 ">
        <div className="flex justify-start items-center gap-10  ">
          <div className="!p-2 hover:bg-[#2d3748] cursor-pointer">
            <img src="/logo.svg" alt="Logo" className="h-10  cursor-pointer " />
          </div>
          <div className="flex justify-between gap-10  !px-3 items-center border-r-2 border-l-2 border-[#2d3748] h-[5rem] cursor-pointer hover:bg-[#2d3748]">
            <button className="text-white text-2xl font-semibold py-1 rounded-md cursor-pointer ">
              CTS Point Inc
            </button>
            <i>
              <IoIosArrowDown size={20} color="white" />
            </i>
          </div>
        </div>
      </div>

      {/* Center: Search Input */}
      <div
        className="flex justify-start items-center bg-[#1e2a3f] text-center !px-6 !py-4 rounded-xl 
             focus-within:ring-3 focus-within:ring-blue-200 focus-within:border-blue-200 border border-[#2c2c2c] transition"
      >
        <i>
          <IoSearchOutline
            size={20}
            color="lightgray"
            className="cursor-pointer"
          />
        </i>
        <input
          type="text"
          placeholder=" Search products, orders, customers, or navigate to"
          className="w-[40rem] !ml-3 bg-transparent text-white !text-2xl !font-medium outline-none placeholder:text-gray-100"
        />
      </div>

      {/* Right: Icons and Link */}
      <div className="flex items-center  gap-5  !mr-2 ">
        <div className="flex items-center justify-between gap-1  ">
          <div className="!p-4 hover:bg-[#2d3748] cursor-pointer ">
            <HelpDropdown />
          </div>
          <div className="relative !p-4 hover:bg-[#2d3748] cursor-pointer">
            <Bell
              size={20}
              color="white"
              className=" cursor-pointer  hover:text-[#ffffff] 
              
hover:bg-[#2d3748]"
            />
            <span className="absolute top-[3px] right-1 text-xs bg-red-500 text-white rounded-md !p-3 w-5 h-5 flex items-center justify-center">
              38
            </span>
          </div>
          <div className="relative !p-4 hover:bg-[#2d3748] cursor-pointer">
            <FaRegCircleUser
              size={20}
              color="white"
              className="cursor-pointer hover:text-[#ffffff]
            hover:bg-[#2d3748]"
            />
          </div>
        </div>
        <div className="!p-1 hover:bg-[#2d3748] cursor-pointer text-white">
          <a
            href="#"
            className="!text-2xl font-semibold hover:underline flex items-center gap-1  h-[5rem] !px-3 border-l-2 border-[#2d3748]"
          >
            View storefront
            <span>
              <FaExternalLinkAlt size={15} color="gray" className="!ml-1" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

// border:1px solid rgb(45, 55, 72)
