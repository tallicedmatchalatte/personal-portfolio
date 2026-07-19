import { useState, useEffect, useRef } from 'react'

/**
 * Tracks scroll direction ('up' | 'down') and whether the page
 * has scrolled past a given threshold.
 * Used to hide navbar on scroll-down, show on scroll-up.
 */
function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      // Ignore tiny scroll jitters
      if (Math.abs(scrollY - lastScrollY.current) < threshold) return

      setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up')
      setIsScrolled(scrollY > 50)
      lastScrollY.current = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [threshold])

  return { scrollDirection, isScrolled }
}

export default useScrollDirection