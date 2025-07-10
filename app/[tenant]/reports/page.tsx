"use client"
import { useParams } from "next/navigation"

export default function TenantReports() {
  const params = useParams()
  const tenant = params.tenant as string

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports - {tenant}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="text-3xl mr-4">💰</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$45,230</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="text-3xl mr-4">👥</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🛒</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">892</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex items-center">
              <div className="text-3xl mr-4">🏆</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">98.5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center py-16">
        <div className="card-body">
          <div className="text-6xl mb-4">📈</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Detailed reports and analytics will be implemented here
          </h2>
          <p className="text-gray-500">Charts, graphs, and data visualization coming soon</p>
        </div>
      </div>
    </div>
  )
}
