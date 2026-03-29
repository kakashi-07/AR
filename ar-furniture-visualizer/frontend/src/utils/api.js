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

function getAuthHeaders(extraHeaders = {}) {
  const token = localStorage.getItem('ar_token')
  return token
    ? { ...extraHeaders, Authorization: `Bearer ${token}` }
    : extraHeaders
}

async function request(path, options = {}) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: getAuthHeaders(options.headers),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw {
      response: {
        status: response.status,
        data,
      },
    }
  }

  return { data }
}

export const api = {
  get(path) {
    return request(path)
  },
  post(path, body) {
    return request(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  },
  delete(path) {
    return request(path, {
      method: 'DELETE',
    })
  },
}

export const API_BASE_URL = apiBaseUrl
