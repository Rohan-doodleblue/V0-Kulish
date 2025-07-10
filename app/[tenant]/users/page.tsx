"use client"
import { useParams } from "next/navigation"

export default function TenantUsers() {
  const params = useParams()
  const tenant = params.tenant as string

  const users = [
    {
      id: "1",
      name: "Alice Johnson",
      email: `alice@${tenant}.com`,
      role: "admin",
      department: "Management",
      status: "active",
    },
    {
      id: "2",
      name: "Bob Wilson",
      email: `bob@${tenant}.com`,
      role: "user",
      department: "Sales",
      status: "active",
    },
    {
      id: "3",
      name: "Carol Davis",
      email: `carol@${tenant}.com`,
      role: "user",
      department: "Marketing",
      status: "inactive",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Team Members - {tenant}</h1>
        <button className="btn btn-primary">➕ Add User</button>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="font-medium">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === "admin" ? "badge-blue" : "badge-green"}`}>
                        {user.role.toUpperCase()}
                      </span>
                    </td>
                    <td>{user.department}</td>
                    <td>
                      <span className={`badge ${user.status === "active" ? "badge-green" : "badge-red"}`}>
                        {user.status.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button className="btn btn-sm btn-secondary">✏️ Edit</button>
                        <button className="btn btn-sm btn-danger">🗑️ Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
