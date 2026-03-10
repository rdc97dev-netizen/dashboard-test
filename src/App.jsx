import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Overview from './components/Overview.jsx'
import Analytics from './components/Analytics.jsx'
import Activity from './components/Activity.jsx'

export default function App() {
  const [active, setActive] = useState('overview')

  const pages = {
    overview: <Overview />,
    analytics: <Analytics />,
    activity: <Activity />,
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar active={active} setActive={setActive} />
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: '2.5rem',
        background: 'var(--bg)',
        animation: 'fadeUp 0.4s ease both',
      }}>
        {pages[active]}
      </main>
    </div>
  )
}
