import React from 'react'
import { type IAccordSummary } from '@/features/accords/types'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { useFragranceDraftAccords } from '../hooks/useFragranceDraftAccords'
import SelectableAccordsGrid from '@/features/accords/components/SelectableAccordsGrid'
import { useDebounce } from '@/hooks/useDebounce'

export interface DraftAccordsGridProps {
  accords: IAccordSummary[]
  isLoading?: boolean
}

const DraftAccordsGrid = (props: DraftAccordsGridProps) => {
  const { accords, isLoading = false } = props

  const { id, updateAccords } = useFragranceDraftContext()
  const { draftAccords, loading } = useFragranceDraftAccords(id)

  const selectedAccordIds = new Set(draftAccords?.map(a => a.id) ?? [])

  const handleUpdateAccords = useDebounce(
    (selectedIds: Set<string>) => {
      void updateAccords({ accordIds: Array.from(selectedIds) })
    }
  )

  const handleOnSelectedChange = (selectedIds: Set<string>) => {
    handleUpdateAccords(selectedIds)
  }

  if (loading) return null

  return (
    <SelectableAccordsGrid
      accords={accords}
      defaultSelected={selectedAccordIds}
      isLoading={isLoading}
      onSelectedChange={handleOnSelectedChange}
    />
  )
}

export default DraftAccordsGrid
