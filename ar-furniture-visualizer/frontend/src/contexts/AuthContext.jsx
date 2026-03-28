/**
 * AuthContext.jsx  —  works with the Flask + SQLite backend
 * API base: /api  (proxied to http://localhost:8000 via Vite)
 */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// ── Axios instance ──────────────────────────────────────────
const api = axios.create({ baseURL: '/api' })

// Attach JWT automatically to every request
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('ar_token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

// ── Context ────────────────────────────────────────────────
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  // Re-hydrate session from localStorage on page load
  useEffect(() => {
    const token = localStorage.getItem('ar_token')
    if (token) {
      api.get('/auth/me')
        .then(res  => setUser(res.data))
        .catch(()  => { localStorage.removeItem('ar_token'); setUser(null) })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  // ── Login ─────────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    setError(null)
    try {
      const res = await api.post('/auth/login', { email, password })
      localStorage.setItem('ar_token', res.data.token)
      setUser(res.data.user)
      return { success: true }
    } catch (err) {
      const msg = err.response?.data?.detail || 'Incorrect email or password.'
      setError(msg)
      return { success: false, error: msg }
    }
  }, [])

  // ── Sign-up ───────────────────────────────────────────────
  const signup = useCallback(async (name, email, password) => {
    setError(null)
    try {
      const res = await api.post('/auth/register', { name, email, password })
      localStorage.setItem('ar_token', res.data.token)
      setUser(res.data.user)
      return { success: true }
    } catch (err) {
      const msg = err.response?.data?.detail || 'Registration failed. Please try again.'
      setError(msg)
      return { success: false, error: msg }
    }
  }, [])

  // ── Logout ────────────────────────────────────────────────
  const logout = useCallback(() => {
    localStorage.removeItem('ar_token')
    setUser(null)
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}

export { api }
