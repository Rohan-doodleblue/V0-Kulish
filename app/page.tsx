"use client"
import { Card, Button, Typography, Space } from "antd"
import { useRouter } from "next/navigation"
import { DashboardOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function HomePage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Card style={{ width: 600, textAlign: "center" }}>
        <Title level={1}>MyApp</Title>
        <Paragraph>Multi-Tenant Application with Next.js, Redux Toolkit, and Ant Design</Paragraph>

        <Space direction="vertical" size="large" style={{ width: "100%", marginTop: "32px" }}>
          <Title level={3}>Demo Routes</Title>

          <Space wrap>
            <Button type="primary" icon={<DashboardOutlined />} onClick={() => router.push("/admin/dashboard")}>
              Super Admin Dashboard
            </Button>

            <Button icon={<UserOutlined />} onClick={() => router.push("/admin/users")}>
              User Management
            </Button>
          </Space>

          <Title level={4}>Tenant Examples</Title>
          <Space wrap>
            <Button icon={<ShopOutlined />} onClick={() => router.push("/acme/dashboard")}>
              Acme Corp Dashboard
            </Button>

            <Button icon={<ShopOutlined />} onClick={() => router.push("/techsolutions/dashboard")}>
              Tech Solutions Dashboard
            </Button>

            <Button icon={<ShopOutlined />} onClick={() => router.push("/global/dashboard")}>
              Global Industries Dashboard
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  )
}
