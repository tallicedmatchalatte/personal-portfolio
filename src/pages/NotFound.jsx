import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '10rem 2rem' }}>
      <h1 className="gradient-text" style={{ fontSize: '4rem' }}>404</h1>
      <p style={{ color: 'var(--color-text-secondary)', margin: '1rem 0 2rem' }}>
        Page not found.
      </p>
      <Link to="/" className="gradient-text">← Back home</Link>
    </main>
  )
}

export default NotFound