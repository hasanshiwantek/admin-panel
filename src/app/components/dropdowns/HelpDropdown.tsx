"use client";
import { useEffect, useRef, useState } from "react";
import { HelpCircle } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function HelpDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
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
    <div className="relative " ref={ref}>
      {/* Trigger Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="p-3 hover:bg-[#2d3748] rounded-md cursor-pointer"
      >
        <HelpCircle size={20} className="text-white" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-[120%] w-[320px] bg-white  text-black rounded-md shadow-lg z-50 !px-6">
          <div>
            <h1>Help</h1>
          </div>
          <div className="p-4 border-b ">
            <input
              type="text"
              placeholder="Search support articles"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
            />
          </div>

          <div className="p-3 text-sm ">
            <div className="font-semibold mb-2">Additional help</div>
            <ul className="space-y-2">
              <div className="flex justify-between items-center ">
                <li className="hover:text-blue-700 cursor-pointer !text-xl">
                  Ask the Community{" "}
                </li>
                <i>
                  <FaExternalLinkAlt size={15} color="gray" />
                </i>
              </div>

              <div className="flex justify-between items-center ">
                <li className="hover:text-blue-700 cursor-pointer !text-xl">
                  Visit the Help Center
                </li>
                <i>
                  <FaExternalLinkAlt size={15} color="gray" />
                </i>
              </div>

              <div className="flex justify-between items-center ">
                <li className="hover:text-blue-700 cursor-pointer !text-xl">
                  Submit a feature request
                </li>
                <i>
                  <FaExternalLinkAlt size={15} color="gray" />
                </i>
              </div>
            </ul>

            <div className="font-semibold mt-4 mb-2">Services & support</div>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                BigCommerce University{" "}
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Email support{" "}
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Live chat </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Phone support{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
