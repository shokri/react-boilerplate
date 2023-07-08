import variable from 'assets/scss/config/_variables-dark.module.scss'

const colorPalette = {
  primary: {
    main: '#bababa',
    dark: '#03a9f4',
    light: '#ffffff',
    border: '#4dc8ff',
    shadow: '#4dc8ff',
    contrastText: '#fff'
  },
  secondary: {
    main: variable?.secondary,
    dark: '#F89925',
    light: '#ff5454',
    border: '#ff9897',
    shadow: '#ff9897',
    contrastText: '#fff'
  },
  success: {
    main: '#4caf50',
    dark: '#4caf50',
    light: '#69ea6e',
    border: '#99ff99',
    shadow: '#99ff99',
    contrastText: '#fff'
  },
  warning: {
    main: '#ff861b',
    dark: '#ff861b',
    light: '#ffb541',
    border: '#ffd27d',
    shadow: '#ffd27d',
    contrastText: '#fff'
  },
  error: {
    main: variable.error,
    dark: '#f11515',
    light: '#ff5454',
    border: '#ff9897',
    shadow: '#ff9897',
    contrastText: '#fff'
  },
  info: {
    main: variable.info,
    dark: '#BBCBDB',
    light: '#9FB4C8',
    border: '#b5a3ff',
    shadow: '#b5a3ff',
    contrastText: '#fff'
  },
  inactive: {
    main: '#888888',
    dark: '#888888', // TODO
    light: '#aaaaaa',
    border: '#cccccc',
    shadow: '#cccccc',
    contrastText: '#fff'
  },
  dark: {
    main: variable.dark
  },
  light: {
    main: '#ffffff'
  },
  divider: '#343869',
  grey: {
    main: '#939393',
    light: '#A3A3A3'
  },
  blue: {
    main: '#0E3D59'
  },
  green: {
    light: '#476582',
    dark: '#647A8C'
  },
  background: {
    default: '#0D102F',
    paper: variable.paper
  }
}

export default colorPalette
