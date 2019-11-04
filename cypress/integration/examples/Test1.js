// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My First Test', function() {
    it('My FirstTest case', function() {

        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //selenium get hit url in browser, cypress get acts like findElemento of selenium
        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);
        //Parent child chaining
        cy.get('.products').find('.product').should('have.length',4);
        cy.get(':nth-child(3) > .product-image > img');
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        
     // expect(true).to.equal(true)
    })
  })