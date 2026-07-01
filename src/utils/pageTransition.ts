export function navigateWithTransition(navigate: () => void) {
  const doc = document as Document & { startViewTransition?: (callback: () => void) => void }
  if (typeof doc.startViewTransition === 'function') {
    doc.startViewTransition(navigate)
  } else {
    navigate()
  }
}
