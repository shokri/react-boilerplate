import AppProviders from 'libs/appProviders'
import { ErrorBoundary } from 'react-error-boundary'
import Routes from 'routes'

export default function App() {
  return (
    <AppProviders>
      <ErrorBoundary FallbackComponent={null}>
        <Routes />
      </ErrorBoundary>
    </AppProviders>
  )
}
