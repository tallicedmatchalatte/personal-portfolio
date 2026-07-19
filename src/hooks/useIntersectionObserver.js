import { useState, useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to an element, and a boolean that becomes
 * true once that element enters the viewport (stays true after).
 */
function useIntersectionObserver(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export default useIntersectionObserver