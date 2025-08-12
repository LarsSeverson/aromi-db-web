import React from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

export interface TextInputProps extends Field.Root.Props {
  label?: string
  placeholder?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const TextInput = (props: TextInputProps) => {
  const {
    label = '',
    placeholder = '',
    defaultValue,
    onValueChange,
    ...rest
  } = props

  return (
    <Field.Root
      {...rest}
      name={label}
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md'
      >
        {label}
      </Field.Label>

      <Field.Control
        type='text'
        required
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={({ valid }) =>
          clsx(
            'p-2 my-1 border-2 rounded-md border-surface2',
            valid === false && 'outline-red-600'
          )}
        onValueChange={onValueChange}
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default TextInput
