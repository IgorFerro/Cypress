// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My Test', function() {
    
    before(function() {
        // runs once before all tests in the block
      })
    




    it('My Test', function() {
    
        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get('input[name="name"]:nth-child(2)').type("Bob")
        cy.get('select').select("Male")

       
  

        
        

})
})
