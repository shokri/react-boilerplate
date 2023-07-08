import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import XHR from 'i18next-xhr-backend'

const LangVersion = '0.0.50'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fa',
    fallbackLng: 'fa',
    defaultNS: 'common',
    fallbackNS: 'common',
    keySeparator: ':',
    load: 'languageOnly',
    ns: ['common', 'menu'],
    initImmediate: false,
    transSupportBasicHtmlNodes: true,

    backend: {
      backends: [
        LocalStorageBackend, // primary
        XHR // fallback
      ],
      backendOptions: [
        {
          prefix: 'App-',
          expirationTime: 24 * 60 * 60 * 1000, // 1 days
          versions: { en: 'v' + LangVersion, fa: 'v' + LangVersion },
          store: window.localStorage
        },
        {
          loadPath: '/locales/{{lng}}/{{ns}}.json?v=' + LangVersion
        }
      ]
    },

    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'htmlTag',
        'path',
        'subdomain',
        'navigator'
      ],
      lookupLocalStorage: 'i18nLng'
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false
    }
  })

export default i18n
