"use client"
import { Layout, Menu, Avatar, Dropdown, Typography } from "antd"
import type React from "react"

import { UserOutlined, DashboardOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons"
import { useRouter, usePathname } from "next/navigation"
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks"
import { logout } from "@/app/lib/features/auth/authSlice"

const { Header, Sider, Content } = Layout
const { Title } = Typography

interface SuperAdminLayoutProps {
  children: React.ReactNode
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)

  const menuItems = [
    {
      key: "/admin/dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/admin/users",
      icon: <UserOutlined />,
      label: "Users",
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key)
  }

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
      <Sider width={250} theme="light">
        <div style={{ padding: "16px", borderBottom: "1px solid #f0f0f0" }}>
          <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
            MyApp
          </Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 0, marginTop: "16px" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Logo
          </Title>
          <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight">
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
              <span>Profile</span>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: "24px", padding: "24px", background: "#fff" }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
