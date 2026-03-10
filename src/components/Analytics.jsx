import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts'

const weeklyData = [
  { day: 'Mon', sessions: 420, conversions: 38 },
  { day: 'Tue', sessions: 580, conversions: 52 },
  { day: 'Wed', sessions: 510, conversions: 44 },
  { day: 'Thu', sessions: 720, conversions: 68 },
  { day: 'Fri', sessions: 690, conversions: 61 },
  { day: 'Sat', sessions: 340, conversions: 29 },
  { day: 'Sun', sessions: 290, conversions: 24 },
]

const retentionData = [
  { week: 'W1', rate: 100 },
  { week: 'W2', rate: 72 },
  { week: 'W3', rate: 58 },
  { week: 'W4', rate: 49 },
  { week: 'W5', rate: 44 },
  { week: 'W6', rate: 41 },
]

const channels = [
  { name: 'Organic Search', value: 42, color: 'var(--accent)' },
  { name: 'Direct',         value: 28, color: 'var(--accent2)' },
  { name: 'Social Media',   value: 18, color: 'var(--accent3)' },
  { name: 'Email',          value: 12, color: '#ffd96e' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'var(--surface2)', border: '1px solid var(--border)',
      borderRadius: '8px', padding: '0.6rem 1rem',
      fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
    }}>
      <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ color: p.color }}>{p.name}: {p.value}</div>
      ))}
    </div>
  )
}

export default function Analytics() {
  return (
    <div style={{ maxWidth: 1100 }}>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>INSIGHTS</p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Analytics</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        {/* Sessions vs Conversions */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
          <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>Sessions vs Conversions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>This week</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData} barGap={4}>
              <XAxis dataKey="day" tick={{ fill: '#6b6b88', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="sessions" fill="#6e8fff" radius={[4,4,0,0]} name="Sessions" />
              <Bar dataKey="conversions" fill="#7fff6e" radius={[4,4,0,0]} name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Retention */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
          <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>User Retention</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>6-week cohort</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={retentionData}>
              <CartesianGrid stroke="#2a2a3a" strokeDasharray="4 4" vertical={false} />
              <XAxis dataKey="week" tick={{ fill: '#6b6b88', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b6b88', fontSize: 11, fontFamily: 'var(--font-mono)' }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="rate" stroke="#ff6e9c" strokeWidth={2.5} dot={{ fill: '#ff6e9c', r: 4 }} name="Retention %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Traffic Channels */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
        <h2 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem' }}>Traffic Channels</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {channels.map(({ name, value, color }) => (
            <div key={name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{name}</span>
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color }}>{value}%</span>
              </div>
              <div style={{ height: 6, background: 'var(--surface2)', borderRadius: 999 }}>
                <div style={{
                  height: '100%', width: `${value}%`,
                  background: color, borderRadius: 999,
                  transition: 'width 1s ease',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
