import NumberInput from '@/components/NumberInput'
import SelectInput from '@/components/SelectInput'
import TextAreaInput from '@/components/TextAreaInput'
import TextInput from '@/components/TextInput'
import React from 'react'
import { CONCENTRATION_OPTIONS, STATUS_OPTIONS } from '../types'

const NewFragranceInfoSection = () => {
  return (
    <div
      className='flex flex-col gap-4'
    >
      <TextInput
        label='Name'
        placeholder='Add the full fragrance name'
      />

      <TextInput
        label='Brand'
        placeholder='Add the brand or house name'
      />

      <TextAreaInput
        label='Description'
        placeholder='Describe the fragrance, inspiration, or notable details'
      />

      <div
        className='max-w-min'
      >
        <NumberInput
          label='Release Year'
          min={1800}
          max={2026}
          placeholder='2025'
        />
      </div>

      <SelectInput
        label='Concentration'
        options={CONCENTRATION_OPTIONS}
      />

      <SelectInput
        label='Status'
        options={STATUS_OPTIONS}
      />
    </div>
  )
}

export default NewFragranceInfoSection
