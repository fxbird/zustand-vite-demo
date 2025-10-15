import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { useUserStore } from './store/useUserStore'

export default function App() {
  const username = useUserStore((s) => s.username)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={username ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
