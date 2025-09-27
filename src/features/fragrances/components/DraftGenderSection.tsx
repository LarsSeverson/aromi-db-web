import React from 'react'
import DraftTraitInput from './DraftTraitInput'
import { GENDER_OPTIONS } from '../types'
import GenderSvg from '@/features/fragrances/components/GenderSvg'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import { useDebounce } from '@/hooks/useDebounce'
import type { SegmentedVoteLineOption } from '@/components/SegmentedVoteLine'
import { useFragranceRequestTrait } from '../hooks/useFragranceRequestTrait'

const DraftGenderSection = () => {
  const { id, setTrait } = useFragranceRequestDraftContext()
  const { trait, isLoading } = useFragranceRequestTrait(id, 'GENDER')
  const defaultScore = trait?.selectedOption?.score

  const handleUpdateTrait = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'GENDER' })
    }
  )

  const handleOnOptionChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateTrait(score)
  }

  if (isLoading) return null

  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <span
        className='text-lg pl-3'
      >
        Gender
      </span>

      <DraftTraitInput
        name='Gender'
        options={GENDER_OPTIONS}
        defaultValue={defaultScore}
        onOptionChange={handleOnOptionChange}
        icon={(
          <GenderSvg
            width={25}
            height={25}
          />
        )}
      />
    </section>
  )
}

export default DraftGenderSection
