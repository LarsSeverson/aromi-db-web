import React from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { MAX_FRAGRANCE_DESCRIPTION_LENGTH, ValidDescription } from '../types'
import LengthTextInput from '@/components/LengthTextInput'
import { useDebounce } from '@/hooks/useDebounce'

export interface DraftDescriptionInputProps {
  description?: string | null
}

const DraftDescriptionInput = (props: DraftDescriptionInputProps) => {
  const { description } = props
  const { updateDraft } = useFragranceDraftContext()

  const handleOnValueChange = useDebounce(
    (value: string) => {
      const { data, success } = ValidDescription.safeParse(value)
      if (success) {
        void updateDraft({ description: data })
      }
    }
  )

  return (
    <LengthTextInput
      value={description ?? ''}
      name='Description'
      label='Description'
      placeholder='Describe the fragrance, inspiration, or notable details'
      maxLength={MAX_FRAGRANCE_DESCRIPTION_LENGTH}
      onValueChange={handleOnValueChange}
      render={<textarea />}
    />
  )
}

export default DraftDescriptionInput
