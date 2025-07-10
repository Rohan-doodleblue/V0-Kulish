import type React from "react"
import SuperAdminLayout from "../components/layout/super-admin-layout"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SuperAdminLayout>{children}</SuperAdminLayout>
}
