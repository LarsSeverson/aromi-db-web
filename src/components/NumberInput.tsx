import React from 'react'
import { NumberField } from '@base-ui-components/react'
import clsx from 'clsx'
import { FiMinus, FiPlus } from 'react-icons/fi'

export interface NumberInputProps extends NumberField.Input.Props {
  label?: string
}

const NumberInput = (props: NumberInputProps) => {
  const {
    label,
    ...rest
  } = props

  const min = props.min
  const max = props.max

  return (
    <NumberField.Root
      min={Number(min)}
      max={Number(max)}
      format={{ useGrouping: false }}
      className={clsx(
        'flex flex-col items-start gap-1 w-full min-w-0'
      )}
    >
      <label
        className={clsx(
          'font-semibold text-md text-light'
        )}
      >
        {label}
      </label>

      <div
        className={clsx(
          'flex'
        )}
      >
        <NumberField.Decrement
          className={clsx(
            'flex size-10 items-center justify-center select-none',
            'border border-surface2 bg-surface2/40 hover:bg-surface2',
            'rounded-md rounded-tr-none rounded-br-none'
          )}
        >
          <FiMinus />
        </NumberField.Decrement>

        <NumberField.Input
          {...rest}
          inputMode='numeric'
          pattern='[0-9]*'
          className={clsx(
            'h-10 w-28 text-center text-base tabular-nums',
            'border-y border-surface2 bg-background text-light',
            'focus:z-[1]',
            'min-w-0'
          )}
        />

        <NumberField.Increment
          className={clsx(
            'flex size-10 items-center justify-center select-none',
            'border border-surface2 bg-surface2/40 hover:bg-surface2',
            'rounded-md rounded-tl-none rounded-bl-none'
          )}
        >
          <FiPlus />
        </NumberField.Increment>
      </div>
    </NumberField.Root>
  )
}

export default NumberInput
