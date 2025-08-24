import React, { useState } from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

const MAX_DESCRIPTION_LENGTH = 3000

export interface DraftNameInputProps {
  name?: string | null
}

const DraftNameInput = (props: DraftNameInputProps) => {
  const { name } = props
  const { id, updateDraft } = useFragranceDraftContext()

  const [value, setValue] = useState(name ?? '')
  const [length, setLength] = useState((name ?? '').length)

  const handleOnValueChange = (value: string) => {
    setValue(value)
    setLength(value.length)
  }

  return (
    <Field.Root
      name='Title'
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md'
      >
        Description
      </Field.Label>

      <Field.Control
        value={value}
        required
        placeholder='Add a detailed description'
        maxLength={MAX_DESCRIPTION_LENGTH}
        onValueChange={handleOnValueChange}
        className={clsx(
          'p-2 my-1 border-2 rounded-md border-surface2',
          'bg-inherit'
        )}
      />

      <div
        className='flex items-center'
      >
        <Field.Error
          className='text-red-600 font-pd text-sm ml-1'
        />

        <span
          className={clsx(
            'ml-auto text-xs text-light/60',
            length > MAX_DESCRIPTION_LENGTH && 'text-red-600'
          )}
        >
          {length} / {MAX_DESCRIPTION_LENGTH}
        </span>
      </div>
    </Field.Root>
  )
}

export default DraftNameInput
