import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FragranceDraftPage from '@/features/fragrances/pages/FragranceDraftPage'

export const Route = createFileRoute('/drafts/fragrance/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  return <FragranceDraftPage />
}
