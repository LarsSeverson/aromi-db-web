import React from 'react'
import LengthTextInput from '@/components/LengthTextInput'
import { MAX_FRAGRANCE_DESCRIPTION_LENGTH, MAX_FRAGRANCE_NAME_LENGTH, MAX_RELEASE_YEAR, MIN_RELEASE_YEAR, RELEASE_YEAR_PLACEHOLDER, CONCENTRATION_OPTIONS, STATUS_OPTIONS } from '../types'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'
import NumberInput from '@/components/NumberInput'
import SelectInput from '@/components/SelectInput'

const NewDraftInfoSection = () => {
  return (
    <section
      className='flex-1 flex flex-col h-full gap-4'
    >
      <LengthTextInput
        label='Name'
        placeholder='Add the full fragrance name'
        maxLength={MAX_FRAGRANCE_NAME_LENGTH}
      />

      {/* <TextInput
        label='Brand'
        placeholder='Add the brand or house name'
      /> */}

      <LengthTextInput
        label='Description'
        placeholder='Describe the fragrance, inspiration, or notable details'
        maxLength={MAX_FRAGRANCE_DESCRIPTION_LENGTH}
        render={(
          <textarea />
        )}
      />

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
          min={MIN_RELEASE_YEAR}
          max={MAX_RELEASE_YEAR}
          placeholder={RELEASE_YEAR_PLACEHOLDER}
        />
      </Field.Root>

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

      <Field.Root
        name='Concentration'
      >
        <Field.Label
          className='font-semibold text-md'
        >
          Status
        </Field.Label>

        <SelectInput
          items={STATUS_OPTIONS}
        />
      </Field.Root>
    </section>
  )
}

export default NewDraftInfoSection
