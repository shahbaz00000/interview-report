import { useGoogleLogin } from "@react-oauth/google";
import React, { useRef } from "react";
import useAuth from "../hooks/authhook";

const Login = () => {
  const { handleLogin } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLoginForm = (e) => {
    e.preventDefault();

    const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
    };

    handleLogin(data);
};

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (authResult) => {
        if (authResult?.code) {
            handleLogin({
                code: authResult.code,   // ✅ send properly
                type: "google"           // optional (backend differentiate)
            });
        } else {
            console.error("No auth code received");
        }
    },
    onError: (error) => {
        console.error("Google login error:", error);
    },
    flow: "auth-code",
});
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">
            Sign in to your AI Report Generator account
          </p>
        </div>

        <form onSubmit={handleLoginForm} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M12 11.86v2.78h4.94c-.2 1.34-.82 2.48-1.77 3.27l2.83 2.2c1.65-1.52 2.67-3.76 2.67-6.25 0-.42-.04-.83-.11-1.23H12z"
                />
                <path
                  fill="#34A853"
                  d="M5.74 14.32c-.26-.78-.41-1.61-.41-2.46s.15-1.68.41-2.46L2.9 7.2C1.85 8.9 1.3 10.86 1.3 12.88s.55 4 1.6 5.68l2.84-2.24z"
                />
                <path
                  fill="#FBBC05"
                  d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-2.84-2.2c-1.03.7-2.34 1.12-5.11 1.12-2.13 0-3.94-.72-5.32-1.92l-2.84 2.2C5.96 22.97 8.74 24 12 24z"
                />
                <path
                  fill="#EA4335"
                  d="M19.95 7.18l-2.84 2.2c-.75-.66-1.72-1.06-3.1-1.06-2.77 0-4.88 1.86-5.67 4.35L3.3 10.6C4.3 6.67 7.8 3.68 12 3.68c2.86 0 5.39 1.09 7.05 3.5z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Don't have an account?
            <a
              href="/signup"
              className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
