"use client"
import { Card, Typography, Empty } from "antd"
import { useParams } from "next/navigation"
import { useAppDispatch } from "@/app/lib/hooks"
import { setCurrentTenant } from "@/app/lib/features/tenant/tenantSlice"
import { useEffect } from "react"

const { Title } = Typography

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
      <Title level={2}>Tenant Dashboard - {tenant}</Title>

      <Card style={{ textAlign: "center", minHeight: "400px" }}>
        <Empty
          description={
            <span>
              This is the tenant dashboard for <strong>{tenant}</strong>
              <br />
              Content will be implemented here
            </span>
          }
        />
      </Card>
    </div>
  )
}
