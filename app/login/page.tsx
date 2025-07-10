"use client"
import { useRouter } from "next/navigation"
import type React from "react"

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { login } from "@/app/lib/features/auth/authSlice"
import { useEffect, useState } from "react"

interface LoginFormValues {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: "",
  })

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication - in real app, this would be an API call
      if (formData.email && formData.password) {
        // Determine user role based on email domain
        let userRole: "super_admin" | "tenant_admin" | "user" = "user"
        let userName = "User"

        if (formData.email.includes("admin@")) {
          userRole = "super_admin"
          userName = "Super Admin"
        } else if (formData.email.includes("@acme.com") || formData.email.includes("@techsolutions.com")) {
          userRole = "tenant_admin"
          userName = "Tenant Admin"
        }

        // Dispatch login action
        dispatch(
          login({
            id: "1",
            name: userName,
            email: formData.email,
            role: userRole,
          }),
        )

        // Redirect to home page (demo routes)
        router.push("/")
      } else {
        setError("Please enter valid credentials")
      }
    } catch (error) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="card w-full max-w-md">
        <div className="card-body">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">Welcome to MyApp</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm text-center">{error}</div>}

            <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-full">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-3">Demo Credentials:</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Super Admin:</strong>
                <br />
                Email: admin@myapp.com
                <br />
                Password: admin123
              </div>
              <div>
                <strong>Tenant Admin:</strong>
                <br />
                Email: admin@acme.com
                <br />
                Password: tenant123
              </div>
              <div>
                <strong>Regular User:</strong>
                <br />
                Email: user@example.com
                <br />
                Password: user123
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
