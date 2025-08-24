import { debounce } from 'lodash'
import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number = 500
) => {
  const fnRef = useRef(fn)
  const debouncedRef = useRef(debounce(
    (...args: Parameters<T>) => {
      fnRef.current(...args)
    },
    delay
  ))

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  useEffect(() => {
    const ref = debouncedRef.current

    return () => {
      ref.cancel()
    }
  }, [])

  return debouncedRef.current
}
