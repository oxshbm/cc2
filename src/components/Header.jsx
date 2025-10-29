import React from 'react'
import { GraduationCap, Users, MessageCircle, Folder, Heart, Calendar, BookOpen, User } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-white border-b border-[#f2e8dc] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left logo and brand */}
        <div className="flex items-center space-x-2">
          <GraduationCap className="text-[#ff5e5b]" size={22} />
          <h1 className="text-xl font-extrabold text-[#ff5e5b] font-[Poppins]">
            Campus Connect
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-gray-600 font-[Poppins]">
          <button className="flex items-center space-x-2 bg-[#e8d8f3] text-[#ff5e5b] px-3 py-1.5 rounded-lg font-semibold">
            <GraduationCap size={16} />
            <span>Dashboard</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <Users size={16} />
            <span>Study Groups</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <MessageCircle size={16} />
            <span>Q&A</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <Users size={16} />
            <span>Alumni</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <Folder size={16} />
            <span>Projects</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <Heart size={16} />
            <span>Mentorship</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <Calendar size={16} />
            <span>Events</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <BookOpen size={16} />
            <span>Workshops</span>
          </button>

          <button className="flex items-center space-x-2 hover:text-[#ff5e5b] transition">
            <User size={16} />
            <span>Profile</span>
          </button>
        </nav>
      </div>

      {/* Accent bottom line */}
      <div className="h-[2px] bg-[#ff5e5b]" />
    </header>
  )
}

export default Header
