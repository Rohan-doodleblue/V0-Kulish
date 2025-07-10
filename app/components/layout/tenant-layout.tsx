"use client"
import type React from "react"
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks"
import { logout } from "@/app/lib/features/auth/authSlice"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

interface TenantLayoutProps {
  children: React.ReactNode
  tenant: string
}

export default function TenantLayout({ children, tenant }: TenantLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const { currentTenant } = useAppSelector((state) => state.tenant)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const menuItems = [
    {
      key: `/${tenant}/dashboard`,
      icon: "📊",
      label: "Dashboard",
    },
    {
      key: `/${tenant}/users`,
      icon: "👥",
      label: "Users",
    },
    {
      key: `/${tenant}/reports`,
      icon: "📈",
      label: "Reports",
    },
    {
      key: `/${tenant}/settings`,
      icon: "⚙️",
      label: "Settings",
    },
  ]

  const handleMenuClick = (key: string) => {
    router.push(key)
  }

  const handleLogout = () => {
    dispatch(logout())
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">
            {currentTenant?.name || tenant.charAt(0).toUpperCase() + tenant.slice(1)}
          </h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                pathname === item.key ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" : "text-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Logo</h2>
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">👤</div>
                <span>{user?.name || "Profile"}</span>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                  <button
                    onClick={() => setShowProfileMenu(false)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    👤 Profile
                  </button>
                  <button
                    onClick={() => setShowProfileMenu(false)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    ⚙️ Account Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
