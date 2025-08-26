import React from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { MAX_FRAGRANCE_NAME_LENGTH } from '../types'
import LengthTextInput from '@/components/LengthTextInput'

export interface DraftNameInputProps {
  name?: string | null
}

const DraftNameInput = (props: DraftNameInputProps) => {
  const { name } = props
  const { id, updateDraft } = useFragranceDraftContext()

  const handleOnValueChange = (value: string) => {

  }

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
