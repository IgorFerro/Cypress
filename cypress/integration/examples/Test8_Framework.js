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
       cy.visit(Cypress.env('url'));

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
     Cypress.config('defaultCommandTimeout',8000)
     homePage.getShopTab().click()
    
      //Parametrize test with Multiple data sets
      this.data.productName

      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
      });
     productPage.checkOutButton().click();
     
     var sum=0
     //Retrieve the values and sum them
     cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
        const actualText=$el.text() 
        var res=actualText.split(" ")
         res = res[1].trim()
         sum=Number(sum)+Number(res)
        

     }).then(function(){
        cy.log(sum)
     })
     //Compare the values 
     cy.get('h3 strong').then(function(element){
        const amount=element.text() 
        var res=amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
        
     })
      

     cy.contains('Checkout').click()
     cy.get('#country').type('India')
     cy.get('.suggestions > ul > li > a').click()
     cy.get('#checkbox2').click({force:true})
     cy.get('input[type="submit"]').click()
     //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
     cy.get('.alert').then(function(element){

         const actualText=element.text()
         expect(actualText.includes("Success!")).to.be.true
     })

    
  
      
})
})
