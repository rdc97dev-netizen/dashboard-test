import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const stats = [
  { label: 'Total Revenue',  value: '$48,295', change: '+12.5%', up: true,  icon: DollarSign, color: 'var(--accent)'  },
  { label: 'Active Users',   value: '3,842',   change: '+8.1%',  up: true,  icon: Users,      color: 'var(--accent2)' },
  { label: 'Orders',         value: '1,209',   change: '-2.4%',  up: false, icon: ShoppingCart,color: 'var(--accent3)' },
  { label: 'Growth Rate',    value: '24.6%',   change: '+4.2%',  up: true,  icon: TrendingUp,  color: '#ffd96e'        },
]

const revenueData = [
  { month: 'Jan', value: 28000 },
  { month: 'Feb', value: 32000 },
  { month: 'Mar', value: 27000 },
  { month: 'Apr', value: 38000 },
  { month: 'May', value: 35000 },
  { month: 'Jun', value: 42000 },
  { month: 'Jul', value: 48295 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: '8px', padding: '0.6rem 1rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
      }}>
        <div style={{ color: 'var(--text-muted)', marginBottom: 2 }}>{label}</div>
        <div style={{ color: 'var(--accent)', fontWeight: 500 }}>${payload[0].value.toLocaleString()}</div>
      </div>
    )
  }
  return null
}

export default function Overview() {
  return (
    <div style={{ maxWidth: 1100 }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
          MON, 09 MAR 2026
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Overview</h1>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {stats.map(({ label, value, change, up, icon: Icon, color }) => (
          <div key={label} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '1.4rem',
            animation: 'fadeUp 0.4s ease both',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
              </span>
              <div style={{
                width: 32, height: 32, borderRadius: '8px',
                background: color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={15} color={color} />
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              {value}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: up ? 'var(--accent)' : 'var(--accent3)' }}>
              {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              <span style={{ fontFamily: 'var(--font-mono)' }}>{change}</span>
              <span style={{ color: 'var(--text-muted)', marginLeft: 2 }}>vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '1.75rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Revenue</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Last 7 months</p>
          </div>
          <div style={{
            background: 'var(--accent)18', color: 'var(--accent)',
            borderRadius: '6px', padding: '0.3rem 0.75rem',
            fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-mono)',
          }}>
            +12.5% ↑
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7fff6e" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#7fff6e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={{ fill: '#6b6b88', fontSize: 12, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke="#7fff6e" strokeWidth={2} fill="url(#grad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
