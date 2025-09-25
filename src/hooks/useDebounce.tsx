import { debounce, type DebouncedFunc } from 'lodash'
import type React from 'react'
import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  deps: React.DependencyList = [],
  delay: number = 500
) => {
  const fnRef = useRef(fn)

  const debouncedRef = useRef<DebouncedFunc<T>>(
    debounce((...args: Parameters<T>) => {
      fnRef.current(...args)
    }, delay)
  )

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  useEffect(() => {
    const ref = debouncedRef.current

    debouncedRef.current = debounce(
      (...args: Parameters<T>) => {
        fnRef.current(...args)
      },
      delay
    )

    return () => {
      ref?.cancel()
    }
  }, [delay, ...deps])

  return debouncedRef.current
}
