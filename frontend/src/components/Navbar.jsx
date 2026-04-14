import React from "react";
import useAuth from "../hooks/authhook";
import { useDispatch } from "react-redux";
import { logout } from "../stores/slice/authslice";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="bg-linear-to-r from-purple-900 via-blue-900 to-indigo-900 p-4 shadow-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {isLoggedIn && (
              <a href="/generate-report">AI Interview Report Generator</a>
            )}
          </div>
          <div className="flex space-x-4">
            {!isLoggedIn && (
              <>
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-green-600 hover:to-emerald-700"
                >
                  Signup
                </a>
                <a
                  href="/login"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-indigo-700"
                >
                  Login
                </a>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
