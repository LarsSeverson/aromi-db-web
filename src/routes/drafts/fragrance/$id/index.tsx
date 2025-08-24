import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/fragrance/$id/')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/drafts/fragrance/$id/"!</div>
}
