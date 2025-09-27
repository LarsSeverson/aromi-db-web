import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FragranceRequestDraftPage from '@/features/fragrances/pages/FragranceRequestDraftPage'

export const Route = createFileRoute('/drafts/fragrance/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  return <FragranceRequestDraftPage />
}
