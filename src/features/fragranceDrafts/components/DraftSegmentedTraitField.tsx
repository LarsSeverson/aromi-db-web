import { Field } from '@base-ui-components/react/field'
import SegmentedVoteLine, { type SegmentedVoteLineOption, type SegmentedVoteLineProps } from '@/components/SegmentedVoteLine'
import clsx from 'clsx'
import React, { useId, useRef } from 'react'

export interface DraftSegmentedTraitFieldProps<T extends SegmentedVoteLineOption> extends Omit<SegmentedVoteLineProps<T>, 'onOptionChange'> {
  name: string
  label?: string
  icon?: React.ReactNode
  required?: boolean
  className?: string
}

const DraftSegmentedTraitField = <T extends SegmentedVoteLineOption, >(
  props: DraftSegmentedTraitFieldProps<T>
) => {
  const {
    options,
    name,
    label,
    icon,
    required = false,
    className,
    ...rest
  } = props

  const id = useId()
  const controlRef = useRef<HTMLInputElement>(null)

  const handleOptionChange = (o: T) => {
    if (controlRef.current != null) {
      controlRef.current.value = o.label
      controlRef.current.dispatchEvent(new Event('input', { bubbles: true }))
      controlRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  return (
    <Field.Root
      name={name}
      className={clsx(
        'flex flex-col gap-3',
        className
      )}
    >
      <Field.Label
        id={`${id}-label`}
        className={clsx(
          'font-semibold text-md text-light flex flex-col items-center gap-1 self-center'
        )}
      >
        {icon}

        {label}
      </Field.Label>

      <div
        aria-labelledby={`${id}-label`}
      >
        <SegmentedVoteLine
          {...rest}
          options={options}
          onOptionChange={handleOptionChange}
        />
      </div>

      <Field.Control
        ref={controlRef}
        type='text'
        required={required}
        defaultValue=''
        className='sr-only'
      />

      <Field.Error
        className={clsx(
          'text-red-600 font-pd text-sm ml-1'
        )}
      />
    </Field.Root>
  )
}

export default DraftSegmentedTraitField
