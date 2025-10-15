import React from 'react'
import { useUserStore } from '../store/useUserStore'

export default function HomePage() {
  const { username, logout } = useUserStore()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="rounded-2xl bg-white p-10 shadow-lg text-center border border-gray-200">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">欢迎回来，{username}！</h2>
        <p className="mb-6 text-gray-600">你已成功登录 Zustand 全局状态系统 🎉</p>
        <button
          onClick={logout}
          className="rounded-lg bg-red-500 px-6 py-2 font-medium text-white hover:bg-red-600 transition-colors"
        >
          退出登录
        </button>
      </div>
    </div>
  )
}
