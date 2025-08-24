import NumberInput from '@/components/NumberInput'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import { DEFAULT_RELEASE_YEAR, MAX_RELEASE_YEAR, MIN_RELEASE_YEAR, RELEASE_YEAR_PLACEHOLDER } from '../types'

export interface DraftReleaseYearInputProps {
  releaseYear?: number | null
}

const DraftReleaseYearInput = (props: DraftReleaseYearInputProps) => {
  const { releaseYear } = props

  const [value, setValue] = useState(releaseYear ?? DEFAULT_RELEASE_YEAR)

  return (
    <Field.Root
      name='Release Year'
      className={clsx(
        'w-[20ch] flex flex-col gap-1'
      )}
    >
      <Field.Label
        className='font-semibold text-md'
      >
        Release Year
      </Field.Label>

      <NumberInput
        value={value}
        min={MIN_RELEASE_YEAR}
        max={MAX_RELEASE_YEAR}
        placeholder={RELEASE_YEAR_PLACEHOLDER}
      />
    </Field.Root>
  )
}

export default DraftReleaseYearInput
