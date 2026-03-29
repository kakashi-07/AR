import axios from 'axios'

const envBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()
const defaultBaseUrl = import.meta.env.DEV
  ? '/api'
  : `${window.location.origin}/api`

const apiBaseUrl = (envBaseUrl || defaultBaseUrl).replace(/\/+$/, '')

if (!import.meta.env.DEV && !envBaseUrl) {
  console.warn(
    'VITE_API_BASE_URL is not set. Falling back to same-origin /api. ' +
    'If frontend and backend are deployed as separate Render services, set VITE_API_BASE_URL.'
  )
}

export const api = axios.create({ baseURL: apiBaseUrl })

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('ar_token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

export const API_BASE_URL = apiBaseUrl
