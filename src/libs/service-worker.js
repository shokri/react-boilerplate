// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST
const version = `app-${process.env.REACT_APP_VERSION}`
let installPromptEvent
const __DEVELOPMENT__ = false
const __DEBUG__ = false
const offlineResources = ['/', 'index.html']
const ignoreFetch = [
  /manifest.json/,
  /service-worker.js/,
  /\/api/,
  /chrome-extension:\/\//
]

function updateStaticCache() {
  return caches
    .open(cacheKey('offline'))
    .then(cache => cache.addAll(offlineResources))
    .then(() => self.skipWaiting())
}

function onInstall(event) {
  log('install event in progress.')
  event.waitUntil(updateStaticCache())
}

function networkedAndCache(request) {
  return fetch(request).then(response => {
    var copy = response.clone()
    caches.open(cacheKey('resources')).then(cache => {
      cache.put(request.url, copy)
    })
    log('(network: cache write)', request.method, request.url)
    return response
  })
}

function networkedOrOffline(request) {
  return fetch(request)
    .then(response => {
      log('(network)', request.method, request.url)
      return response
    })
    .catch(() => offlineResponse(request))
}

function networkedOrCached(request) {
  return networkedAndCache(request).catch(() => cachedOrOffline(request))
}

function cachedOrOffline(request) {
  return caches.match(request).then(response => {
    return response || offlineResponse(request)
  })
}

function offlineResponse(request) {
  log('(offline)', request.method, request.url)
  if (request.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)) {
    return caches.match('/offline.svg')
  } else {
    return caches.match('/offline.html')
  }
}

function cachedOrNetworked(request) {
  return caches.match(request).then(response => {
    log(
      response ? '(cached)' : '(network: cache miss)',
      request.method,
      request.url
    )

    return response || networkedAndCache(request)
  })
}

function onFetch(event) {
  const request = event.request
  if (shouldAlwaysFetch(request)) {
    event.respondWith(networkedOrOffline(request))
    return
  }
  if (shouldFetchAndCache(request)) {
    event.respondWith(networkedOrCached(request))
    return
  }
  event.respondWith(cachedOrNetworked(request))
}

function removeOldCache() {
  return caches
    .keys()
    .then(keys => {
      return Promise.all(
        keys
          .filter(key => !key.startsWith(version))
          .map(key => caches.delete(key))
      )
    })
    .then(() => {
      log('removeOldCache completed.')
    })
}

function onActivate(event) {
  log('activate event in progress.')
  event.waitUntil(removeOldCache())
}

function cacheKey() {
  return [version, ...arguments].join(':')
}

function log() {
  if (developmentMode()) console.log('[ServiceWorker] ', ...arguments)
}

function shouldAlwaysFetch(request) {
  return (
    __DEVELOPMENT__ ||
    request.method !== 'GET' ||
    ignoreFetch.some(regex => request.url.match(regex))
  )
}

function shouldFetchAndCache(request) {
  return ~request.headers.get('Accept').indexOf('text/html')
}

function developmentMode() {
  return __DEVELOPMENT__ || __DEBUG__
}
// eslint-disable-next-line
function addToHomeScreen() {
  if (installPromptEvent) {
    installPromptEvent.prompt()

    installPromptEvent = null
  }
}

function onBeforeInstallPrompt(event) {
  event.preventDefault()
  installPromptEvent = event
  return false
}

self.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
self.addEventListener('install', onInstall)
self.addEventListener('fetch', onFetch)
self.addEventListener('activate', onActivate)
