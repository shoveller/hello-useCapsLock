import { useCallback, useEffect, useState } from 'react'

export const useCapsLock = () => {
  const [ isCapsLock, setCapsLock ] = useState(false)

  const onKey = useCallback(e => {
    const isCapsLock = e.getModifierState('CapsLock')
    setCapsLock(isCapsLock)
  }, [ setCapsLock ])

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKey)
    }
  }, [ onKey ])

  return isCapsLock
}
