import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Loader from 'modules/general/components/loader'
import Snackbar from 'modules/general/components/snackbar'
import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { cacheRtl } from './createEmotionCache'
import i18n from './i18next.config'
import queryClient from './query.config'
import store from './store'
import appTheme from './theme'

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
              <Snackbar>
                <Suspense fallback={<Loader />}>{children}</Suspense>
              </Snackbar>
            </I18nextProvider>
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </QueryClientProvider>
  )
}
