"use client"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/app/lib/hooks"
import { useEffect } from "react"

export default function HomePage() {
  const router = useRouter()
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="card w-full max-w-2xl">
        <div className="card-body text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MyApp</h1>
          <p className="text-gray-600 mb-8">Multi-Tenant Application with Next.js and Redux Toolkit</p>

          {user && (
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-900">Welcome back, {user.name}!</p>
              <p className="text-blue-700">Role: {user.role.replace("_", " ").toUpperCase()}</p>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Demo Routes</h2>

              {user?.role === "super_admin" && (
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  <button onClick={() => router.push("/admin/dashboard")} className="btn btn-primary">
                    📊 Super Admin Dashboard
                  </button>
                  <button onClick={() => router.push("/admin/users")} className="btn btn-secondary">
                    👥 User Management
                  </button>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-4">Tenant Examples</h3>
              <div className="flex flex-wrap gap-3 justify-center mb-4">
                <button onClick={() => router.push("/acme/dashboard")} className="btn btn-primary">
                  🏢 Acme Corp Dashboard
                </button>
                <button onClick={() => router.push("/acme/users")} className="btn btn-secondary">
                  👥 Acme Corp Users
                </button>
                <button onClick={() => router.push("/acme/reports")} className="btn btn-secondary">
                  📈 Acme Corp Reports
                </button>
                <button onClick={() => router.push("/acme/settings")} className="btn btn-secondary">
                  ⚙️ Acme Corp Settings
                </button>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button onClick={() => router.push("/techsolutions/dashboard")} className="btn btn-secondary">
                  🔧 Tech Solutions Dashboard
                </button>
                <button onClick={() => router.push("/global/dashboard")} className="btn btn-secondary">
                  🌍 Global Industries Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
