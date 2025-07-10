"use client"
import { Layout, Typography, Avatar, Dropdown } from "antd"
import type React from "react"

import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons"
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks"
import { logout } from "@/app/lib/features/auth/authSlice"
import { useRouter } from "next/navigation"

const { Header, Content } = Layout
const { Title } = Typography

interface TenantLayoutProps {
  children: React.ReactNode
  tenant: string
}

export default function TenantLayout({ children, tenant }: TenantLayoutProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const { currentTenant } = useAppSelector((state) => state.tenant)

  const handleLogout = () => {
    dispatch(logout())
    router.push("/login")
  }

  const profileMenuItems = [
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ]

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <Title level={4} style={{ margin: 0, color: "#fff" }}>
          {currentTenant?.name || tenant} - Tenant Portal
        </Title>
        <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight">
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer", color: "#fff" }}>
            <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
            <span>Profile</span>
          </div>
        </Dropdown>
      </Header>
      <Content style={{ margin: "24px", padding: "24px", background: "#fff" }}>{children}</Content>
    </Layout>
  )
}
