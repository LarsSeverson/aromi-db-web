import SelectInput from '@/components/SelectInput'
import { CONCENTRATION_OPTIONS } from '../types'
import { type Concentration } from '@/generated/graphql'
import { Field } from '@base-ui-components/react'
import React, { useState } from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { useDebounce } from '@/hooks/useDebounce'

const DEFAULT_CONCENTRATION = CONCENTRATION_OPTIONS[0]

export interface DraftConcentrationInputProps {
  concentration?: Concentration | null
}

const DraftConcentrationInput = (props: DraftConcentrationInputProps) => {
  const { concentration } = props

  const { updateDraft } = useFragranceDraftContext()

  const [value, setValue] = useState(concentration ?? DEFAULT_CONCENTRATION.value)
  const [, setSelected] = useState(CONCENTRATION_OPTIONS.find(opt => opt.value === concentration) ?? DEFAULT_CONCENTRATION)

  const handleUpdateDraft = useDebounce(
    (concentration: Concentration | null) => {
      void updateDraft({ concentration })
    }
  )

  const handleOnValueChange = (value: string | null) => {
    const newSelected = CONCENTRATION_OPTIONS.find(opt => opt.value === value)
    if (newSelected == null) return

    setValue(newSelected.value)
    setSelected(newSelected)
    handleUpdateDraft(newSelected.value)
  }

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
        value={value}
        items={CONCENTRATION_OPTIONS}
        onValueChange={handleOnValueChange}
      />
    </Field.Root>
  )
}

export default DraftConcentrationInput
