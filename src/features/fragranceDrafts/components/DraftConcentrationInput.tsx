import SelectInput from '@/components/SelectInput'
import { CONCENTRATION_OPTIONS } from '@/features/requests/types'
import { type Concentration } from '@/generated/graphql'
import { Field } from '@base-ui-components/react'
import React, { useState } from 'react'

const DEFAULT_CONCENTRATION = CONCENTRATION_OPTIONS[0]

export interface DraftConcentrationInputProps {
  concentration?: Concentration
}

const DraftConcentrationInput = (props: DraftConcentrationInputProps) => {
  const {
    concentration = null
  } = props

  const [value, setValue] = useState(concentration ?? DEFAULT_CONCENTRATION.value)
  const [selected, setSelected] = useState(CONCENTRATION_OPTIONS.find(opt => opt.value === concentration) ?? DEFAULT_CONCENTRATION)

  return (
    <Field.Root
      name='Concentration'
    >
      <Field.Label
        className='font-semibold text-md'
      >
        Concentration
      </Field.Label>

      <SelectInput
        items={CONCENTRATION_OPTIONS}
      />
    </Field.Root>
  )
}

export default DraftConcentrationInput
