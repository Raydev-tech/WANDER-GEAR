import React, { useEffect, useState } from "react";
import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-20">
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        data-aos="zoom-in"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back to <span className="text-blue-600">WanderGear</span>
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to continue your adventure
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full outline-none"
                required
              />
              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex space-x-3 mt-6">
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Google</span>
          </button>
          <button className="flex-1 border rounded-lg py-2 flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span>Facebook</span>
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
