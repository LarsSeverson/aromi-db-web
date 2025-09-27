import * as React from 'react'
import { createRootRouteWithContext } from '@tanstack/react-router'
import MainLayout from '@/layouts/MainLayout'
import type { IUserSummary } from '@/features/users'
import type { UseRouterUtilsReturn } from '@/hooks/useRouterUtils'

interface RouterContext {
  me: IUserSummary | undefined
  utils: UseRouterUtilsReturn | undefined
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent
})

function RootComponent () {
  return <MainLayout />
}
