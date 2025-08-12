import React from 'react'
import SegmentedTraitField from './SegmentedTraitField'
import { GENDER_OPTIONS } from '../types'
import GenderSvg from '@/features/fragrances/components/GenderSvg'

const NewFragranceGenderSection = () => {
  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-10'
    >
      <span
        className='text-lg'
      >
        Gender
      </span>

      <SegmentedTraitField
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
