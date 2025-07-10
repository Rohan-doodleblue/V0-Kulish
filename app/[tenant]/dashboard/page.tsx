"use client"
import { useParams } from "next/navigation"
import { useAppDispatch } from "@/app/lib/hooks"
import { setCurrentTenant } from "@/app/lib/features/tenant/tenantSlice"
import { useEffect } from "react"

export default function TenantDashboard() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const tenant = params.tenant as string

  useEffect(() => {
    // Set current tenant based on URL parameter
    dispatch(
      setCurrentTenant({
        id: tenant,
        name: tenant.charAt(0).toUpperCase() + tenant.slice(1),
        slug: tenant,
      }),
    )
  }, [tenant, dispatch])

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tenant Dashboard - {tenant}</h1>

      <div className="card text-center py-16">
        <div className="card-body">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            This is the tenant dashboard for <strong>{tenant}</strong>
          </h2>
          <p className="text-gray-500">Content will be implemented here</p>
        </div>
      </div>
    </div>
  )
}
