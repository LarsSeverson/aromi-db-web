import React from 'react'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import { MAX_FRAGRANCE_NAME_LENGTH, ValidName } from '../types'
import LengthTextInput from '@/components/LengthTextInput'
import { useDebounce } from '@/hooks/useDebounce'

export interface DraftNameInputProps {
  name?: string | null
}

const DraftNameInput = (props: DraftNameInputProps) => {
  const { name } = props
  const { updateRequest } = useFragranceRequestDraftContext()

  const handleOnValueChange = useDebounce(
    (value: string) => {
      const { data, success } = ValidName.safeParse(value)
      if (success) {
        void updateRequest({ name: data })
      }
    }
  )

  return (
    <LengthTextInput
      value={name ?? ''}
      name='Name'
      label='Name'
      placeholder='Add the full name'
      maxLength={MAX_FRAGRANCE_NAME_LENGTH}
      onValueChange={handleOnValueChange}
    />
  )
}

export default DraftNameInput
