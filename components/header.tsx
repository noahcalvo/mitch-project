"use client"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("hello")
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  return (
    <header className="bg-[#0a3b6c] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-md">
          <div className="text-center md:text-left mb-0 mr-4 md:mr-0">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">MITCH ZAMOFF</h1>
            <p className="text-lg md:text-xl mt-1 text-blue-100">Alternative Dispute Resolution</p>
          </div>
          {/* Mobile hamburger menu (optional) */}
          <div className="md:hidden absolute right-8 top-8">
            <button className="text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
            <nav className={`${!isMenuOpen && 'hidden md:block'} grid md:flex grid-cols-2 md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 w-full md:w-auto mt-4 md:mt-0`}>
              <a href="#" className="text-white hover:text-blue-200 font-medium w-full md:w-auto text-center">
                HOME
              </a>
              <a href="#services" className="text-white hover:text-blue-200 font-medium w-full md:w-auto text-center">
                SERVICES
              </a>
              <a href="#experience" className="text-white hover:text-blue-200 font-medium w-full md:w-auto text-center">
                EXPERIENCE
              </a>
              <a href="#contact" className="text-white hover:text-blue-200 font-medium w-full md:w-auto text-center">
                CONTACT
              </a>
            </nav>
        </div>
      </div>
    </header>
  )
}