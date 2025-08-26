import React from 'react'
import DraftTraitInput from './DraftTraitInput'
import { GENDER_OPTIONS } from '../../requests/types'
import GenderSvg from '@/features/fragrances/components/GenderSvg'

const DraftGenderSection = () => {
  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <span
        className='text-lg'
      >
        Gender
      </span>

      <DraftTraitInput
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

export default DraftGenderSection
