import React from 'react'
import DraftSegmentedTraitField from './DraftSegmentedTraitField'
import { GENDER_OPTIONS } from '../../requests/types'
import GenderSvg from '@/features/fragrances/components/GenderSvg'

const NewFragranceGenderSection = () => {
  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <span
        className='text-lg'
      >
        Gender
      </span>

      <DraftSegmentedTraitField
        name='Gender'
        options={GENDER_OPTIONS}
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

export default NewFragranceGenderSection
