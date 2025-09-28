import React from 'react'
import DraftNameInput from './DraftNameInput'
import { useFragranceRequest } from '../hooks/useFragranceRequest'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import DraftDescriptionInput from './DraftDescriptionInput'
import DraftReleaseYearInput from './DraftReleaseYearInput'
import DraftConcentrationInput from './DraftConcentrationInput'
import DraftStatusInput from './DraftStatusInput'
import DraftBrandInput from './DraftBrandInput'

const DraftInfoSection = () => {
  const { id } = useFragranceRequestDraftContext()
  const { fragranceRequest, isLoading } = useFragranceRequest(id)
  const {
    name,
    description,
    releaseYear,
    concentration,
    fragranceStatus,
    brand
  } = fragranceRequest ?? {}

  if (isLoading) {
    return null
  }

  return (
    <section
      className='flex flex-col gap-5 w-full h-full min-w-0'
    >
      <DraftNameInput
        name={name}
      />

      <DraftBrandInput
        brand={brand}
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
        status={fragranceStatus}
      />
    </section>
  )
}

export default DraftInfoSection
