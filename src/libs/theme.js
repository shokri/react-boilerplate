import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import colorPalette from './colorPalette'

const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1480
    }
  },
  palette: {
    mode: 'dark',
    white: {
      main: '#ffffff80'
    },
    ...colorPalette
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          marginTop: 1,
          marginBottom: 1
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { height: 2 }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        grouped: {
          border: 'none !important',
          color: '#a3a3a3',
          padding: '4px 12px',
          background: '#fff1',
          borderRadius: '6px !important'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 13
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#25284c'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          zIndex: 1301,
          borderRadius: 8
        },
        paper: {
          backgroundImage: 'unset'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          backgroundImage: 'unset'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          padding: 8
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: 6,
          height: 6,
          borderRadius: 8,
          background: '#313562'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#5e6293',
          borderRadius: 8
        }
      }
    }
  },
  shape: {
    borderRadius: 4,
    circle: '50%'
  },
  typography: {
    h1: {
      fontSize: 20
    },
    h2: {
      fontSize: 18
    },
    h3: {
      fontSize: 16
    },
    h4: {
      fontSize: 14
    },
    h5: {
      fontSize: 12
    },
    h6: {
      fontSize: 10
    },
    body1: {
      fontSize: 12
    },
    body2: {
      fontSize: 10.5
    },
    caption: {
      fontSize: 10
    },
    useNextVariants: true,
    fontFamily: 'IRANSans'
  }
})

const appTheme = responsiveFontSizes(theme)

export default appTheme
