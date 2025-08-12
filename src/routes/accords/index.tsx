import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accords/')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/accords/"!</div>
}
