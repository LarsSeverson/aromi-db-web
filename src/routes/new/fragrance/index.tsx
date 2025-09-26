import React from 'react'
import NewFragranceDraftPage from '@/features/fragrances/pages/NewFragranceDraftPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new/fragrance/')({
  component: RouteComponent
})

function RouteComponent () {
  return <NewFragranceDraftPage />
}
