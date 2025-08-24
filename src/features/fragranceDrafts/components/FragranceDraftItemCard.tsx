import React from 'react'
import { type IFragranceDraftSummary } from '../types'

export interface FragranceDraftItemCardProps {
  draft: IFragranceDraftSummary
  isSelected?: boolean
}

const FragranceDraftItemCard = (props: FragranceDraftItemCardProps) => {
  const { draft, isSelected } = props

  return (
    <div>
      {/* {draft} */}
    </div>
  )
}

export default FragranceDraftItemCard
