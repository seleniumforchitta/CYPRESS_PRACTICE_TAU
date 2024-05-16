/// <reference types="cypress" />

describe('Introduction to Cypress', () => {
  beforeEach(() => {
    cy.visit('www.google.com')
  })

  it('My First test case', () => {
    cy.log(cy.url());
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Search a Iphone', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#APjFqb').click();
    /* ==== End Cypress Studio ==== */
  });
})
  