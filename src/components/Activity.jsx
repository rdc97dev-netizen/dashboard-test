import { ShoppingCart, UserPlus, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react'

const events = [
  { id: 1,  icon: ShoppingCart, color: 'var(--accent)',  title: 'New order #4821',        desc: 'Maria G. purchased Pro Plan',         time: '2 min ago',  status: 'success' },
  { id: 2,  icon: UserPlus,     color: 'var(--accent2)', title: 'New user registered',     desc: 'carlos@email.com joined',             time: '14 min ago', status: 'info'    },
  { id: 3,  icon: AlertCircle,  color: 'var(--accent3)', title: 'Payment failed',          desc: 'Order #4819 — retry needed',          time: '31 min ago', status: 'error'   },
  { id: 4,  icon: CheckCircle,  color: 'var(--accent)',  title: 'Deployment successful',   desc: 'v2.4.1 deployed to production',       time: '1 hr ago',   status: 'success' },
  { id: 5,  icon: ShoppingCart, color: 'var(--accent)',  title: 'New order #4820',         desc: 'John D. purchased Starter Plan',      time: '1 hr ago',   status: 'success' },
  { id: 6,  icon: RefreshCw,    color: '#ffd96e',        title: 'Subscription renewed',    desc: 'acme-corp renewed Enterprise Plan',   time: '2 hr ago',   status: 'warning' },
  { id: 7,  icon: UserPlus,     color: 'var(--accent2)', title: 'New user registered',     desc: 'ana.lopez@corp.com joined',           time: '3 hr ago',   status: 'info'    },
  { id: 8,  icon: AlertCircle,  color: 'var(--accent3)', title: 'High CPU alert',          desc: 'Server load exceeded 85%',            time: '4 hr ago',   status: 'error'   },
  { id: 9,  icon: CheckCircle,  color: 'var(--accent)',  title: 'Backup completed',        desc: 'Daily backup finished — 2.3 GB',      time: '5 hr ago',   status: 'success' },
  { id: 10, icon: ShoppingCart, color: 'var(--accent)',  title: 'New order #4818',         desc: 'Team Inc. purchased 10 seats',        time: '6 hr ago',   status: 'success' },
]

const statusBadge = {
  success: { bg: '#7fff6e18', color: 'var(--accent)'  },
  info:    { bg: '#6e8fff18', color: 'var(--accent2)' },
  error:   { bg: '#ff6e9c18', color: 'var(--accent3)' },
  warning: { bg: '#ffd96e18', color: '#ffd96e'        },
}

export default function Activity() {
  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>LIVE FEED</p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Activity</h1>
      </div>

      {/* Live indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)',
          animation: 'pulse-dot 1.5s ease-in-out infinite',
        }} />
        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>LIVE</span>
        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>— updating in real time</span>
      </div>

      {/* Feed */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}>
        {events.map(({ id, icon: Icon, color, title, desc, time, status }, i) => (
          <div key={id} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            padding: '1rem 1.5rem',
            borderBottom: i < events.length - 1 ? '1px solid var(--border)' : 'none',
            transition: 'background 0.15s ease',
            animation: `fadeUp 0.3s ease ${i * 0.04}s both`,
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {/* Icon */}
            <div style={{
              width: 36, height: 36, borderRadius: '10px',
              background: color + '18',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={15} color={color} />
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.15rem' }}>{title}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</div>
            </div>

            {/* Badge + time */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem', flexShrink: 0 }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                padding: '0.2rem 0.5rem', borderRadius: '4px',
                background: statusBadge[status].bg, color: statusBadge[status].color,
              }}>{status}</span>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
