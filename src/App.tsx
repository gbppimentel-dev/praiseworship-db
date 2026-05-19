import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import CardNav from './components/CardNav'
import BootLoader from './components/BootLoader'
import HomePage from './pages/HomePage'
import SongsPage from './pages/SongsPage'
import SongsBrowsePage from './pages/SongsBrowsePage'
import SongsNewPage from './pages/SongsNewPage'
import LeadersPage from './pages/LeadersPage'
import LeadersBrowsePage from './pages/LeadersBrowsePage'
import LeadersNewPage from './pages/LeadersNewPage'
import ArchivePage from './pages/ArchivePage'

function AppShell() {
  const navigate = useNavigate()

  const items = [
    {
      label: 'Songs',
      bgColor: '#1B1722',
      textColor: '#fff',
      links: [
        { label: 'Browse Songs', ariaLabel: 'Browse Songs', href: '/songs/browse' },
        { label: 'Add New Song', ariaLabel: 'Add New Song', href: '/songs/new' },
      ],
    },
    {
      label: 'Worship Leaders',
      bgColor: '#2F293A',
      textColor: '#fff',
      links: [
        { label: 'Browse Leaders', ariaLabel: 'Browse Leaders', href: '/leaders/browse' },
        { label: 'Add New Leader', ariaLabel: 'Add New Leader', href: '/leaders/new' },
      ],
    },
    {
      label: 'Archive',
      bgColor: '#2F293A',
      textColor: '#fff',
      links: [{ label: 'Service History', ariaLabel: 'Service History', href: '/archive' }],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <CardNav
        logoText="PraiseDB"
        logoAlt="PraiseDB"
        items={items}
        baseColor="#fff"
        menuColor="#111"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        buttonLabel="Home"
        onButtonClick={() => navigate('/')}
        onLogoClick={() => navigate('/')}
        ease="power3.out"
        theme="light"
      />

      <div className="pt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/songs/browse" element={<SongsBrowsePage />} />
          <Route path="/songs/new" element={<SongsNewPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/leaders/browse" element={<LeadersBrowsePage />} />
          <Route path="/leaders/new" element={<LeadersNewPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const min = 2000
    const max = 4000
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    const timer = window.setTimeout(() => {
      setIsBooting(false)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [])

  if (isBooting) {
    return <BootLoader />
  }

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}