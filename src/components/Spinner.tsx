import clsx from 'clsx'
import React from 'react'

export interface SpinnerProps {
  size?: number
}

const Spinner = (props: SpinnerProps) => {
  const { size = 6 } = props

  return (
    <div
      className='inset-0 flex items-center justify-end'
    >
      <div
        className={clsx(
          'animate-spin rounded-full aspect-square border-t-2 border-white border-solid',
          `h-${size}`
        )}
      />
    </div>
  )
}

export default Spinner
