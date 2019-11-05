// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('My fourth Test -Handle Alerts', function() {
    it('My fourth Test -Handle Alerts', function() {

        //cy.visit("https://qa-web.tilix.com.br");
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit("https://qaclickacademy.com/practice.php");
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click();
        //window:alert
        cy.on('window:alert',(str)=> {
         
            //Mocha 
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
        cy.on('window:confirm',(str)=> {
         
            //Mocha 
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        //Handling Child tab with combination of Cypress & Jquery commands use  cy.visit("https://qaclickacademy.com/practice.php");
         cy.get('#opentab').invoke('removeAttr','target').click()
        

        //Navigating browser controls using Cypress
        cy.url().should('include','qaclickacademy')
        cy.go('back')

})
})
