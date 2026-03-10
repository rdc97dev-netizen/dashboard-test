import { LayoutDashboard, BarChart3, Activity, Settings, Zap } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { id: 'overview',  icon: LayoutDashboard, label: 'Overview' },
  { id: 'analytics', icon: BarChart3,        label: 'Analytics' },
  { id: 'activity',  icon: Activity,         label: 'Activity' },
]

export default function Sidebar({ active, setActive }) {
  const [hovered, setHovered] = useState(null)

  return (
    <aside style={{
      width: '220px',
      minWidth: '220px',
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.25rem',
      gap: '0.5rem',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
        <div style={{
          width: 32, height: 32,
          background: 'var(--accent)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Zap size={16} color="#0a0a0f" strokeWidth={2.5} />
        </div>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Pulse</span>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = active === id
          const isHovered = hovered === id
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.65rem 0.75rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.875rem',
                color: isActive ? '#0a0a0f' : isHovered ? 'var(--text)' : 'var(--text-muted)',
                background: isActive ? 'var(--accent)' : isHovered ? 'var(--surface2)' : 'transparent',
                transition: 'all 0.15s ease',
                textAlign: 'left',
              }}
            >
              <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Bottom */}
      <button style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        padding: '0.65rem 0.75rem',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        background: 'transparent',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.color = 'var(--text)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)' }}
      >
        <Settings size={16} />
        Settings
      </button>
    </aside>
  )
}
