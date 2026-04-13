import React from 'react'
import useAuth from '../hooks/authhook';

const Navbar = () => {

  const { isLoggedIn } = useAuth();

  return (
    <>
    <nav className="bg-linear-to-r from-purple-900 via-blue-900 to-indigo-900 p-4 shadow-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          <a href="/generate-report">AI Interview Report Generator</a>
        </div>
        <div className="flex space-x-4">
          {!isLoggedIn && (
            <>
              <a href="/signup" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">Signup</a>
              <a href="/login" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">Login</a>
            </>
          )}

          {isLoggedIn && (
            <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar