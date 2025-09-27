import SelectInput from '@/components/SelectInput'
import { STATUS_OPTIONS } from '../types'
import type { FragranceStatus } from '@/generated/graphql'
import { Field } from '@base-ui-components/react'
import React, { useState } from 'react'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import { useDebounce } from '@/hooks/useDebounce'

const DEFAULT_STATUS = STATUS_OPTIONS[0]

export interface DraftStatusInputProps {
  status?: FragranceStatus | null
}

const DraftStatusInput = (props: DraftStatusInputProps) => {
  const { status } = props

  const { updateRequest } = useFragranceRequestDraftContext()

  const [value, setValue] = useState(status ?? DEFAULT_STATUS.value)
  const [, setSelected] = useState(STATUS_OPTIONS.find(opt => opt.value === status) ?? DEFAULT_STATUS)

  const handleupdateRequest = useDebounce(
    (status: FragranceStatus | null) => {
      void updateRequest({ status })
    }
  )

  const handleOnValueChange = (value: string | null) => {
    const newSelected = STATUS_OPTIONS.find(opt => opt.value === value)
    if (newSelected == null) return

    setValue(newSelected.value)
    setSelected(newSelected)
    handleupdateRequest(newSelected.value)
  }

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
        value={value}
        items={STATUS_OPTIONS}
        onValueChange={handleOnValueChange}
      />
    </Field.Root>
  )
}

export default DraftStatusInput
