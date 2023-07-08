import useMediaQuery from '@mui/material/useMediaQuery'

export const useDeviceType = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('xs'), {
    noSsr: false
  })
  const isTablet = useMediaQuery(theme => theme.breakpoints.only('sm'), {
    noSsr: false
  })
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.only('md'), {
    noSsr: false
  })
  const isNormalScreen = useMediaQuery(theme => theme.breakpoints.only('lg'), {
    noSsr: false
  })
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.only('xl'), {
    noSsr: false
  })

  return {
    isMobile,
    isTablet,
    isSmallScreen,
    isNormalScreen,
    isLargeScreen,
    isMobileOrTablet: isMobile || isTablet,
    isScreen: isSmallScreen || isLargeScreen || isNormalScreen,
    isNotMobile: isSmallScreen || isLargeScreen || isNormalScreen || isTablet
  }
}

export const useIsMobile = () =>
  useMediaQuery(theme => theme.breakpoints.only('xs'), { noSsr: true })

export const useIsTablet = () =>
  useMediaQuery(theme => theme.breakpoints.only('sm'), { noSsr: true })

export const useIsSmallScreen = () =>
  useMediaQuery(theme => theme.breakpoints.only('md'), { noSsr: true })

export const useIsNormalScreen = () =>
  useMediaQuery(theme => theme.breakpoints.only('lg'), { noSsr: true })

export const useIsBigScreen = () =>
  useMediaQuery(theme => theme.breakpoints.only('xl'), { noSsr: true })

export const useBreakUp = breakpoint =>
  useMediaQuery(theme => theme.breakpoints.up(breakpoint))

export const useBreakDown = breakpoint =>
  useMediaQuery(theme => theme.breakpoints.down(breakpoint))
