// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from '../../pageObjects/HomePage'
import ProductPage from '../../pageObjects/ProductPage'

describe('My Test', function() {
    
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data =data
        })
      })
    

    it('My Test', function() {
        const homePage=new HomePage();
        const productPage = new ProductPage();
       //cy.visit("https://qa-web.tilix.com.br");
       cy.visit("https://rahulshettyacademy.com/angularpractice/");

       homePage.getEditBox().type(this.data.name)
       homePage.getGender(this.data.gender)
     
      //Validate attribute properties
      homePage.getTwoWayDataBiding().should('have.value',this.data.name);
      homePage.getEditBox().should('have.attr','minlength','2')
      homePage.getEntrepreneaur().should('be.disabled')

      //Building customized Cypress commands for reusing the code
      //Debug comands methods pause() and debug()
     // cy.pause()
     // cy.get(':nth-child(2) > .nav-link').click().debug() 
     homePage.getShopTab().click()
    
      //Parametrize test with Multiple data sets
      this.data.productName

      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
      })
productPage.checkOutButton().click();

    
  
      
  

        
        

})
})
