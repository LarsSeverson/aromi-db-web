import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FragranceDraftLayout from '@/features/fragranceDrafts/layouts/FragranceDraftLayout'

export const Route = createFileRoute('/new/fragrance')({
  component: RouteComponent
})

function RouteComponent () {
  return <FragranceDraftLayout />
}
