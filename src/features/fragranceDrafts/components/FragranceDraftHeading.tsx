import React from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import Divider from '@/components/Divider'
import { useFragranceDraftSummary } from '../hooks/useFragranceDraftSummary'

const DRAFT_STATUS_TEXT = {
  idle: null,
  saving: 'Saving…',
  success: 'Changes saved',
  error: 'Unable to save changes'
}

const FragranceDraftHeading = () => {
  const { id, status } = useFragranceDraftContext()

  const { summary } = useFragranceDraftSummary(id)
  const { name } = summary ?? {}

  return (
    <div
      className='max-w-5xl w-full self-center min-w-0'
    >
      <div
        className='flex items-center min-w-0 justify-between'
      >
        <span
          className='text-xl truncate'
        >
          {name ?? 'New Fragrance'}
        </span>

        <span
          className='text-sm text-light/80 text-nowrap'
        >
          {DRAFT_STATUS_TEXT[status]}
        </span>
      </div>

      <Divider
        horizontal
        className='my-4'
      />
    </div>
  )
}

export default FragranceDraftHeading
