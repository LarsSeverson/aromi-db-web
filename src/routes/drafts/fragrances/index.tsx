import FragranceRequestDraftsPage from '@/features/fragrances/pages/FragranceRequestDraftsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/fragrances/')({
  component: RouteComponent
})

function RouteComponent () {
  return <FragranceRequestDraftsPage />
}
