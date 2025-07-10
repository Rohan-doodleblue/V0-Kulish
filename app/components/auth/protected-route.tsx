"use client"
import { useEffect } from "react"
import type React from "react"

import { useRouter } from "next/navigation"
import { useAppSelector } from "@/app/lib/hooks"
import { Spin } from "antd"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: "super_admin" | "tenant_admin" | "user"
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter()
  const { isAuthenticated, user, loading } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, loading, router])

  useEffect(() => {
    if (requiredRole && user && user.role !== requiredRole) {
      // Redirect based on user role
      if (user.role === "super_admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/")
      }
    }
  }, [user, requiredRole, router])

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredRole && user && user.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
