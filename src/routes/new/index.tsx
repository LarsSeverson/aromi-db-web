import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new/')({
  component: RouteComponent
})

function RouteComponent () {
  return null
}
