// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My First Test', function() {
    it('My FirstTest case', function() {
cy.visit('https://example.cypress.io/commands/network-requests')
cy.server()

cy.route({

    method: 'PUT',
    url: 'comments/*',
    status: 404,
    response:{
        error: "Hey comment does not exist"
    },
    delay: 1000,
}).as('UpdateComment')

cy.get('.network-put').click()
cy.get('.network-put-comment').should('contain','Hey comment does not exist')


    })
})