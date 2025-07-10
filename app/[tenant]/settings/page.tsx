"use client"
import { useParams } from "next/navigation"
import type React from "react"

import { useState } from "react"

export default function TenantSettings() {
  const params = useParams()
  const tenant = params.tenant as string
  const [formData, setFormData] = useState({
    organizationName: tenant.charAt(0).toUpperCase() + tenant.slice(1),
    email: `admin@${tenant}.com`,
    phone: "+1 (555) 123-4567",
    address: "123 Business St, City, State 12345",
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Settings updated:", formData)
    alert("Settings saved successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings - {tenant}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold">Organization Settings</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="organizationName" className="form-label">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  rows={3}
                />
              </div>

              <hr className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="notifications"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <label htmlFor="notifications" className="text-sm font-medium text-gray-700">
                    Enable Notifications
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailAlerts"
                    name="emailAlerts"
                    checked={formData.emailAlerts}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <label htmlFor="emailAlerts" className="text-sm font-medium text-gray-700">
                    Email Alerts
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smsAlerts"
                    name="smsAlerts"
                    checked={formData.smsAlerts}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <label htmlFor="smsAlerts" className="text-sm font-medium text-gray-700">
                    SMS Alerts
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                💾 Save Settings
              </button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-xl font-semibold">Security Settings</h2>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <button className="btn btn-secondary w-full">🔑 Change Password</button>
              <button className="btn btn-secondary w-full">🔐 Two-Factor Authentication</button>
              <button className="btn btn-secondary w-full">🔗 API Keys Management</button>
              <button className="btn btn-secondary w-full">⏰ Session Management</button>
              <hr className="my-6" />
              <button className="btn btn-danger w-full">🗑️ Delete Organization</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
