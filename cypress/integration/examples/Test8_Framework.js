// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from '../../pageObjects/HomePage'

describe('My Test', function() {
    
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data =data
        })
      })
    

    it('My Test', function() {
        const homePage=new HomePage();
    
        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
     
      //Validate attribute properties
      cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name);
      cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
      cy.get('#inlineRadio3').should('be.disabled')

      //Building customized Cypress commands for reusing the code
      //Debug comands methods pause() and debug()
     // cy.pause()
      cy.get(':nth-child(2) > .nav-link').click().debug() 
    
      //Parametrize test with Multiple data sets
      this.data.productName

      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
      })
    
  
      
  

        
        

})
})
