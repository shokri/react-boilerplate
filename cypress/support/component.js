// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import { MemoryRouter } from 'react-router-dom'
import AppProviders from '../../src/libs/appProviders'
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Example use:
// cy.mount(<MyComponent />)

import { mount } from 'cypress/react'

Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(
    <AppProviders>
      <MemoryRouter {...options}>{component}</MemoryRouter>
    </AppProviders>,
    options
  )
})
