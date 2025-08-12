import React, { useId } from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

export interface TextAreaInputProps extends Field.Root.Props {
  label?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  onValueChange?: (value: string) => void
}

const TextAreaInput = (props: TextAreaInputProps) => {
  const {
    label = '',
    placeholder = '',
    defaultValue,
    required = false,
    onValueChange,
    ...rest
  } = props

  const id = useId()

  return (
    <Field.Root
      {...rest}
      name={label}
      className='flex flex-col'
    >
      <Field.Label
        htmlFor={id}
        className='font-semibold text-md'
      >
        {label}
      </Field.Label>

      <textarea
        id={id}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={e => onValueChange?.(e.target.value)}
        className={clsx(
          'p-2 my-1 border-2 rounded-md border-surface2 bg-inherit',
          'focus:outline-none',
          'aria-[invalid=true]:outline-red-600'
        )}
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default TextAreaInput
