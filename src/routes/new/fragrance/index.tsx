import React from 'react'
import NewFragranceRequestDraftPage from '@/features/fragrances/pages/NewFragranceRequestDraftPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new/fragrance/')({
  component: RouteComponent
})

function RouteComponent () {
  return <NewFragranceRequestDraftPage />
}
