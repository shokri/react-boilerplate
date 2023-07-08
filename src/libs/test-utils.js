import { render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import AppProvider from './appProviders'
import queryClient from './query.config'

export const createQueryClientWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AppProvider, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
