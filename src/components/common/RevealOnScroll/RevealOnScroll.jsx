import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

/**
 * Wraps children in a div that fades + slides up into view
 * once it enters the viewport. Uses the existing reveal CSS classes.
 *
 * Props:
 *   delay  — optional CSS delay string e.g. '0.1s', '0.2s' (for staggering cards)
 *   className — extra classes to add alongside 'reveal'
 */
function RevealOnScroll({ children, delay = '0s', className = '' }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
