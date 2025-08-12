import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import NewFragrancePage from '@/features/requests/fragrances/pages/NewFragrancePage'

export const Route = createFileRoute('/new/fragrance/')({
  component: RouteComponent
})

function RouteComponent () {
  return <NewFragrancePage />
}
