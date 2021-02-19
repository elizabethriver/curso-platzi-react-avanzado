/* global describe, it, cy */

// const visit = require('graphql')

describe('Petgram', function () {
  it('works app', function () {
    cy.visit('/')
  })
  it('works app at categories', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('works app from nav to home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('users not registered can see users form to signup when go to favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
