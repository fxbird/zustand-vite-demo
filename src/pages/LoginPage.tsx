import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

export default function LoginPage() {
  const [name, setName] = useState('')
  const setUsername = useUserStore((s) => s.setUsername)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!name.trim()) return
    setUsername(name)
    navigate('/')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">登录账户</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入用户名"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={handleLogin}
          className="mt-5 w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 transition-colors"
        >
          登录
        </button>
      </div>
    </div>
  )
}
