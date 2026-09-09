import { useEffect } from 'react'

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Runs once on mount and watches for nodes added later (e.g. filtered projects).
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document
        .querySelectorAll('.reveal')
        .forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const observeAll = () => {
      document
        .querySelectorAll('.reveal:not(.is-visible)')
        .forEach((el) => observer.observe(el))
    }

    observeAll()

    const mutationObserver = new MutationObserver(observeAll)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
