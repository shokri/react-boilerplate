/// <reference types="cypress" />
import Login from './Login'

describe('<Login />', () => {
  it('renders', () => {
    cy.mount(<Login />)
    cy.get('p').should('have.text', 'Login')
  })
})
