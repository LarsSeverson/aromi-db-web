import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/fragrance/')({
  beforeLoad: () => {
    throw redirect({
      to: '/new/fragrance'
    })
  },
  component: RouteComponent
})

function RouteComponent () {
  return null
}
