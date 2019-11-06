// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My fourth Test -Handle Alerts', function() {
    it('My fourth Test -Handle Alerts', function() {

        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.visit("https://qaclickacademy.com/practice.php");
  

        //Handles Mouse Hover on a invisible item
         cy.contains('Top').click({force: true})
         cy.url().should('include','top')
        

})
})
