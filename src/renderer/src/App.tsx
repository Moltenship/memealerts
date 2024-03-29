import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from './providers/ThemeProvider'
import { Toaster } from './components/ui/Toaster'

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  )
}

export default App
