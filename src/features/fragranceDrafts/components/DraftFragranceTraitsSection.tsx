import React from 'react'
import DraftTraitInput from './DraftTraitInput'
import { APPEAL_OPTIONS, BALANCE_OPTIONS, COMPLEXITY_OPTIONS, LONGEVITY_OPTIONS, PROJECTION_OPTIONS } from '../../requests/types'
import LongevitySvg from '@/features/fragrances/components/LongevitySvg'
import ProjectionSvg from '@/features/fragrances/components/ProjectionSvg'
import ComplexitySvg from '@/features/fragrances/components/ComplexitySvg'
import BalanceSvg from '@/features/fragrances/components/BalanceSvg'
import AppealSvg from '@/features/fragrances/components/AppealSvg'

const DraftFragranceTraitsSection = () => {
  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <span
        className='text-lg'
      >
        Traits
      </span>

      <DraftTraitInput
        name='Longevity'
        label='Longevity'
        options={LONGEVITY_OPTIONS}
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
        options={PROJECTION_OPTIONS}
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
        options={BALANCE_OPTIONS}
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
        options={COMPLEXITY_OPTIONS}
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
        options={APPEAL_OPTIONS}
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
