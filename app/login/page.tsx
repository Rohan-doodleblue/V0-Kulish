"use client";
import { useRouter } from "next/navigation";
import type React from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { login } from "@/app/lib/features/auth/authSlice";
import { useEffect, useState } from "react";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: "",
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication - in real app, this would be an API call
      if (formData.email && formData.password) {
        // Determine user role based on email domain
        let userRole: "super_admin" | "tenant_admin" | "user" = "user";
        let userName = "User";

        if (formData.email.includes("admin@")) {
          userRole = "super_admin";
          userName = "Super Admin";
        } else if (
          formData.email.includes("@acme.com") ||
          formData.email.includes("@techsolutions.com")
        ) {
          userRole = "tenant_admin";
          userName = "Tenant Admin";
        }

        // Dispatch login action
        dispatch(
          login({
            id: "1",
            name: userName,
            email: formData.email,
            role: userRole,
          })
        );

        // Redirect to home page (demo routes)
        router.push("/");
      } else {
        setError("Please enter valid credentials");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex"
      style={{
        backgroundImage: "url('/images/classroom-bg.jpg')",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Left Side - Logo and Text Content */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 flex-col justify-center px-16 text-white">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-2 h-8 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-4xl font-light">Kullish</h1>
          </div>
        </div>

        {/* Main Text */}
        <div className="max-w-lg">
          <h2 className="text-5xl font-light mb-8 leading-tight">
            Building the Future...
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 relative z-10">
        <div className="w-full max-w-md">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 backdrop-blur-sm">
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                LET'S GET YOU STARTED
              </p>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-transparent text-lg"
                  placeholder="johnsondoe@nomail.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-2 font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all duration-200 text-gray-900 placeholder-gray-400 bg-transparent text-lg pr-10"
                    placeholder="••••••••••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm text-center py-2">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "GETTING STARTED..." : "GET STARTED"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
