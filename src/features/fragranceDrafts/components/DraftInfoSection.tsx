import React from 'react'
import DraftNameInput from './DraftNameInput'
import { useFragranceDraftSummary } from '../hooks/useFragranceDraftSummary'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import DraftDescriptionInput from './DraftDescriptionInput'
import DraftReleaseYearInput from './DraftReleaseYearInput'
import DraftConcentrationInput from './DraftConcentrationInput'
import DraftStatusInput from './DraftStatusInput'

const DraftInfoSection = () => {
  const { id } = useFragranceDraftContext()
  const { summary, loading } = useFragranceDraftSummary(id)
  const {
    name,
    description,
    releaseYear,
    concentration,
    status
  } = summary ?? {}

  if (loading) {
    return null
  }

  return (
    <section
      className='flex flex-col gap-5 w-full h-full'
    >
      <DraftNameInput
        name={name}
      />

      <DraftDescriptionInput
        description={description}
      />

      <DraftReleaseYearInput
        releaseYear={releaseYear}
      />

      <DraftConcentrationInput
        concentration={concentration}
      />

      <DraftStatusInput
        status={status}
      />
    </section>
  )
}

export default DraftInfoSection
