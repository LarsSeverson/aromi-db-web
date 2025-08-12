import React from 'react'
import { createFileRoute, redirect } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: z
    .object({
      showLogIn: z
        .boolean()
        .optional(),
      showSignUp: z
        .boolean()
        .optional()
    }),
  beforeLoad: () => {
    throw redirect({ to: '/fragrances' })
  }
})

function RouteComponent () {
  return <div> Hello "/"! </div>
}
