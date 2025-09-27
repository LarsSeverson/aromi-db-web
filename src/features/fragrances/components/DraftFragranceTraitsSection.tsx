import React, { useMemo } from 'react'
import DraftTraitInput from './DraftTraitInput'
import { APPEAL_OPTIONS, BALANCE_OPTIONS, COMPLEXITY_OPTIONS, LONGEVITY_OPTIONS, PROJECTION_OPTIONS } from '../types'
import LongevitySvg from '@/features/fragrances/components/LongevitySvg'
import ProjectionSvg from '@/features/fragrances/components/ProjectionSvg'
import ComplexitySvg from '@/features/fragrances/components/ComplexitySvg'
import BalanceSvg from '@/features/fragrances/components/BalanceSvg'
import AppealSvg from '@/features/fragrances/components/AppealSvg'
import type { SegmentedVoteLineOption } from '@/components/SegmentedVoteLine'
import { useDebounce } from '@/hooks/useDebounce'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import { useFragranceRequest } from '../hooks/useFragranceRequest'

const DraftFragranceTraitsSection = () => {
  const { id, setTrait } = useFragranceRequestDraftContext()
  const { fragranceRequest, isLoading } = useFragranceRequest(id)

  const traitMap = useMemo(
    () => new Map(fragranceRequest?.traits?.map(t => [t.traitType, t])),
    [fragranceRequest]
  )

  const defaultValues = useMemo(
    () => ({
      LONGEVITY: traitMap.get('LONGEVITY')?.selectedOption?.score,
      PROJECTION: traitMap.get('PROJECTION')?.selectedOption?.score,
      BALANCE: traitMap.get('BALANCE')?.selectedOption?.score,
      COMPLEXITY: traitMap.get('COMPLEXITY')?.selectedOption?.score,
      APPEAL: traitMap.get('APPEAL')?.selectedOption?.score
    }),
    [traitMap]
  )

  const handleUpdateLongevity = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'LONGEVITY' })
    }
  )

  const handleUpdateProjection = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'PROJECTION' })
    }
  )

  const handleUpdateBalance = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'BALANCE' })
    }
  )

  const handleUpdateComplexity = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'COMPLEXITY' })
    }
  )

  const handleUpdateAppeal = useDebounce(
    (score: number) => {
      void setTrait({ score, traitType: 'APPEAL' })
    }
  )

  const handleOnLongevityChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateLongevity(score)
  }

  const handleOnProjectionChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateProjection(score)
  }

  const handleOnBalanceChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateBalance(score)
  }

  const handleOnComplexityChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateComplexity(score)
  }

  const handleOnAppealChange = (option: SegmentedVoteLineOption) => {
    const score = option.score
    handleUpdateAppeal(score)
  }

  if (isLoading) return null

  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <span
        className='text-lg pl-3'
      >
        Traits
      </span>

      <DraftTraitInput
        name='Longevity'
        label='Longevity'
        defaultValue={defaultValues.LONGEVITY}
        options={LONGEVITY_OPTIONS}
        onOptionChange={handleOnLongevityChange}
        icon={(
          <LongevitySvg
            width={21}
            height={21}
          />
        )}
      />

      <DraftTraitInput
        name='Projection'
        label='Projection'
        defaultValue={defaultValues.PROJECTION}
        options={PROJECTION_OPTIONS}
        onOptionChange={handleOnProjectionChange}
        icon={(
          <ProjectionSvg
            width={22}
            height={22}
          />
        )}
      />

      <DraftTraitInput
        name='Balance'
        label='Balance'
        defaultValue={defaultValues.BALANCE}
        options={BALANCE_OPTIONS}
        onOptionChange={handleOnBalanceChange}
        icon={(
          <BalanceSvg
            width={22}
            height={22}
          />
        )}
      />

      <DraftTraitInput
        name='Complexity'
        label='Complexity'
        defaultValue={defaultValues.COMPLEXITY}
        options={COMPLEXITY_OPTIONS}
        onOptionChange={handleOnComplexityChange}
        icon={(
          <ComplexitySvg
            width={22}
            height={22}
          />
        )}
      />

      <DraftTraitInput
        name='Appeal'
        label='Appeal'
        defaultValue={defaultValues.APPEAL}
        options={APPEAL_OPTIONS}
        onOptionChange={handleOnAppealChange}
        icon={(
          <AppealSvg
            width={22}
            height={22}
          />
        )}
      />
    </section>
  )
}

export default DraftFragranceTraitsSection
