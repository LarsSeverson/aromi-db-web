import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './main'
import { useMyContext } from './features/users'
import { useRouterUtils } from './hooks/useRouterUtils'

const App = () => {
  const myContext = useMyContext()
  const utils = useRouterUtils()

  return (
    <RouterProvider
      router={router}
      context={{
        me: myContext.me,
        utils
      }}
    />
  )
}

export default App
