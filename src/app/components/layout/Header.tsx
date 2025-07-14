import React from "react";
import styles from "@/style/Header/Header.module.css";
import { Bell, HelpCircle, User } from 'lucide-react';
const Header: React.FC = () => {
  return (
    <header
      className="w-full h-14 px-4 flex items-center justify-between"
      style={{ backgroundColor: "var(--header-bg)" }}
    >
      {/* Left: Logo & Company Name */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-6" />
        <button className="text-white text-sm font-semibold border border-gray-700 px-3 py-1 rounded-md bg-[#1e2a3f]">
          CTS Point Inc ⌄
        </button>
      </div>

      {/* Center: Search Input */}
      <div className="flex-1 px-8">
        <input
          type="text"
          placeholder="🔍 Search products, orders, customers, or navigate to"
          className="w-full bg-[#1e2a3f] text-white text-sm px-4 py-2 rounded-md border border-[#2c2c2c] placeholder:text-gray-300"
        />
      </div>

      {/* Right: Icons and Link */}
      <div className="flex items-center gap-5 text-white">
        <HelpCircle size={18} className="hover:text-blue-400 cursor-pointer" />
        <div className="relative">
          <Bell size={18} className="hover:text-blue-400 cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            38
          </span>
        </div>
        <User size={20} className="hover:text-blue-400 cursor-pointer" />
        <a
          href="#"
          className="text-sm font-semibold hover:underline flex items-center gap-1"
        >
          View storefront <span className="text-xs">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
