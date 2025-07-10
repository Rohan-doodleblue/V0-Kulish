"use client";
import { Card, Row, Col, Statistic, Table, Typography } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  ShopOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "@/app/lib/hooks";

const { Title } = Typography;

export default function AdminDashboard() {
  const { tenants } = useAppSelector((state) => state.tenant);

  const columns = [
    {
      title: "Tenant Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Status",
      key: "status",
      render: () => <span style={{ color: "green" }}>Active</span>,
    },
  ];

  return (
    <div>
      {/* <Title level={2}>Super Admin Dashboard</Title>

      <Row gutter={16} style={{ marginBottom: "24px" }}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Tenants" value={tenants.length} prefix={<ShopOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Users" value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Active Sessions" value={93} prefix={<TeamOutlined />} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Revenue" value={112893} prefix={<DollarOutlined />} precision={2} />
          </Card>
        </Col>
      </Row> */}

      <Card title="Tenant Overview">
        <Table
          columns={columns}
          dataSource={tenants}
          rowKey="id"
          pagination={false}
        />
      </Card>
    </div>
  );
}
