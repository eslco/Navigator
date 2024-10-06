import React from 'react'
import { Compass } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass size={24} />
          <span className="text-xl font-semibold">Navigator</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-indigo-200">Home</a></li>
            <li><a href="#" className="hover:text-indigo-200">About</a></li>
            <li><a href="#" className="hover:text-indigo-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header