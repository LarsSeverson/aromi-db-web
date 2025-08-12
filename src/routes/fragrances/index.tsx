import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrances/')({
  component: RouteComponent
})

function RouteComponent () {
  return <div>Hello "/fragrances/"!</div>
}
