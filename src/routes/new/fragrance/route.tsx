import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FragranceRequestDraftLayout from '@/features/fragrances/layouts/FragranceRequestDraftLayout'

export const Route = createFileRoute('/new/fragrance')({
  component: RouteComponent
})

function RouteComponent () {
  return <FragranceRequestDraftLayout />
}
