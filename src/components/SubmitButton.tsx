import clsx from 'clsx'
import React from 'react'
import Spinner from './Spinner'

export interface SubmitButtonProps {
  isLoading?: boolean
  text?: string
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading, text = 'Submit' } = props

  return (
    <button
      type='submit'
      disabled={isLoading}
      className={clsx(
        'w-full rounded-3xl h-full py-2 flex items-center justify-center',
        'bg-primary hover:bg-primaryHover font-medium'
      )}
    >
      {isLoading ?? false
        ? <Spinner />
        : (
          <span>
            {text}
          </span>
          )}
    </button>
  )
}

export default SubmitButton
