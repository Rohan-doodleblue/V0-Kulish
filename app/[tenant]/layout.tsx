import type React from "react"
import TenantLayout from "../components/layout/tenant-layout"

export default function TenantLayoutWrapper({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tenant: string }
}) {
  return <TenantLayout tenant={params.tenant}>{children}</TenantLayout>
}
