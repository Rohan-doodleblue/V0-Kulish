"use client"
import { Card, Table, Button, Tag, Space, Typography } from "antd"
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"

const { Title } = Typography

export default function AdminUsers() {
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "super_admin",
      tenant: "System",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@acme.com",
      role: "tenant_admin",
      tenant: "Acme Corp",
      status: "active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@techsolutions.com",
      role: "user",
      tenant: "Tech Solutions",
      status: "inactive",
    },
  ]

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: string) => {
        const color = role === "super_admin" ? "red" : role === "tenant_admin" ? "blue" : "green"
        return <Tag color={color}>{role.replace("_", " ").toUpperCase()}</Tag>
      },
    },
    {
      title: "Tenant",
      dataIndex: "tenant",
      key: "tenant",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <Tag color={status === "active" ? "green" : "red"}>{status.toUpperCase()}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button type="link" icon={<EditOutlined />} size="small">
            Edit
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} size="small">
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <Title level={2}>User Management</Title>
        <Button type="primary" icon={<PlusOutlined />}>
          Add User
        </Button>
      </div>

      <Card>
        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  )
}
