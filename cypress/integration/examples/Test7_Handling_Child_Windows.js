// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My fourth Test -Handle Alerts', function() {
    it('My fourth Test -Handle Alerts', function() {

        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.visit("https://qaclickacademy.com/practice.php");
  

        //Handling Child windows
        cy.get('#opentab').then(function(el){

            const url=el.prop('href')
            cy.log(url)

        }) 
        

})
})
