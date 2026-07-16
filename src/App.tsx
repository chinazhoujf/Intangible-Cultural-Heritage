import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import LoadingScreen from './components/layout/LoadingScreen'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/craft/:id" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
