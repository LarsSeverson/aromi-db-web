import SelectInput from '@/components/SelectInput'
import { STATUS_OPTIONS } from '@/features/requests/types'
import { type FragranceStatus } from '@/generated/graphql'
import { Field } from '@base-ui-components/react'
import React, { useState } from 'react'

const DEFAULT_STATUS = STATUS_OPTIONS[0]

export interface DraftStatusInputProps {
  status?: FragranceStatus
}

const DraftStatusInput = (props: DraftStatusInputProps) => {
  const {
    status = null
  } = props

  const [value, setValue] = useState(status ?? DEFAULT_STATUS.value)
  const [selected, setSelected] = useState(STATUS_OPTIONS.find(opt => opt.value === status) ?? DEFAULT_STATUS)

  return (
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
  )
}

export default DraftStatusInput
