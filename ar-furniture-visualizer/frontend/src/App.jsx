import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SceneProvider } from './contexts/SceneContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import LoginPage    from './pages/LoginPage'
import TutorialPage from './pages/TutorialPage'
import ARPage       from './pages/ARPage'

export default function App() {
  return (
    <AuthProvider>
      <SceneProvider>
        <Routes>
          {/* Public */}
          <Route path="/"        element={<LoginPage />} />

          {/* Protected */}
          <Route
            path="/tutorial"
            element={
              <ProtectedRoute>
                <TutorialPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <ARPage />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SceneProvider>
    </AuthProvider>
  )
}
