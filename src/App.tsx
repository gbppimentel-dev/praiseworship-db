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
      bgColor:
        'linear-gradient(135deg, rgba(17,17,17,0.96) 0%, rgba(31,35,28,0.92) 55%, rgba(47,125,50,0.78) 100%)',
      textColor: '#ffffff',
      links: [
        { label: 'Browse Songs', ariaLabel: 'Browse Songs', href: '/songs/browse' },
        { label: 'Add New Song', ariaLabel: 'Add New Song', href: '/songs/new' },
      ],
    },
    {
      label: 'Worship Leaders',
      bgColor:
        'linear-gradient(135deg, rgba(47,125,50,0.92) 0%, rgba(91,171,61,0.72) 55%, rgba(123,209,43,0.45) 100%)',
      textColor: '#ffffff',
      links: [
        { label: 'Browse Leaders', ariaLabel: 'Browse Leaders', href: '/leaders/browse' },
        { label: 'Add New Leader', ariaLabel: 'Add New Leader', href: '/leaders/new' },
      ],
    },
    {
      label: 'Archive',
      bgColor:
        'linear-gradient(135deg, rgba(247,248,245,0.95) 0%, rgba(225,230,220,0.82) 50%, rgba(139,145,135,0.62) 100%)',
      textColor: '#111111',
      links: [{ label: 'Service History', ariaLabel: 'Service History', href: '/archive' }],
    },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(123,209,43,0.08),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7f8f5_100%)] text-slate-900">
      <CardNav
        logoText="PraiseDB"
        logoAlt="PraiseDB"
        items={items}
        baseColor="rgba(255,255,255,0.92)"
        menuColor="#111111"
        buttonBgColor="#111111"
        buttonTextColor="#ffffff"
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
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const min = 2000
    const max = 4000
    const totalDelay = Math.floor(Math.random() * (max - min + 1)) + min
    const fadeTime = 500

    const fadeTimer = window.setTimeout(() => {
      setIsExiting(true)
    }, totalDelay - fadeTime)

    const hideTimer = window.setTimeout(() => {
      setIsBooting(false)
    }, totalDelay)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (isBooting) {
    return <BootLoader exiting={isExiting} />
  }

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}