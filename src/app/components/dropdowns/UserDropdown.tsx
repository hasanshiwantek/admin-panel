"use client";

import { useEffect, useRef, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="p-4 hover:bg-[#2d3748] cursor-pointer rounded-md"
      >
        <FaRegCircleUser size={20} color="white" className="hover:text-white" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-[120%] mt-2 w-[250px] bg-white rounded-md shadow-lg text-black z-50 !p-4">
          <p className="px-4 py-3  !my-4 !text-[12px] font-medium !text-[#5d5b66] ">
            hassan.asif@shiwantek.com
          </p>
          <ul className="  !space-y-5 !text-[#313440]">
            <li className="!text-xl px-4 py-2 hover:text-blue-800 cursor-pointer ">
              Profile name and language
            </li>
            <li className=" !text-xl px-4 py-2  hover:text-blue-800  cursor-pointer ">
              Email address
            </li>
            <li className=" !text-xl px-4 py-2  hover:text-blue-800  cursor-pointer ">
              Password
            </li>
            <li className="!text-xl px-4 py-2  hover:text-blue-800  cursor-pointer ">
              Two-factor authentication
            </li>
          </ul>
          <div className=" hover:text-blue-800  cursor-pointer !my-5  flex justify-between items-center">
            <a className="!text-xl !font-medium text-[#313440] hover:text-blue-800">
              Log out
            </a>
            <i>
              <IoIosLogOut size={18} />
            </i>
          </div>
        </div>
      )}
    </div>
  );
}
