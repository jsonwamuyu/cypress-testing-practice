/// <reference types="Cypress"/>

describe('Movie shop', () => {

  beforeEach(()=>{
    cy.visit("index.html")
  })

  it(" GET REQUEST", ()=>{
    cy.intercept()
    cy.get('[data-cy="movie-name-input"]').type("The Day of the Jackle")
  })
})

