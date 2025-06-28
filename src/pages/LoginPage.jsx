import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm mx-auto border border-gray-200">
        <div className="flex justify-center mb-3">
          <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center">
            {/* Logo placeholder */}
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-1">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Enter your email and password to access your account
        </p>
        <form className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-red-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border rounded px-3 py-2 pr-10 text-sm"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // EyeOff icon
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.94 17.94A10.06 10.06 0 0 1 12 19c-5.05 0-9.27-3.11-10-7 .21-1.13.7-2.19 1.41-3.13M6.1 6.1A9.94 9.94 0 0 1 12 5c5.05 0 9.27 3.11 10 7-.21 1.13-.7 2.19-1.41 3.13M1 1l22 22" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12C3.73 7.61 7.61 4 12 4s8.27 3.61 10 8c-1.73 4.39-5.61 8-10 8s-8.27-3.61-10-8z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 border rounded text-primary focus:ring-primary"
            />
            <label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white rounded px-6 py-2 text-sm font-semibold hover:bg-red-600 transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t" />
          <span className="mx-2 text-xs text-gray-400 uppercase">
            Or continue with
          </span>
          <div className="flex-grow border-t" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button className="flex items-center justify-center border rounded px-2 py-2 text-sm hover:bg-gray-50 transition">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center border rounded px-2 py-2 text-sm hover:bg-gray-50 transition">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook
          </button>
        </div>
        <p className="text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
