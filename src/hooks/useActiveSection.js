import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in the viewport using
 * Intersection Observer, so the navbar can highlight the active link.
 */
function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Section counts as "active" once it's roughly in the
        // middle third of the viewport
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default useActiveSection