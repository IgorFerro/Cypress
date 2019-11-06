// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// Handling dynamic web page
describe('Handling Web tables', function() {
    it('Handling Web tables', function() {

        //cy.visit("https://qa-web.tilix.com.br");
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");

        
        // second chind of td = tr td:nth-child(2)
        
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

          const text=$e1.text()
          if(text.includes("Python")){
           
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
             const priceText = price.text()
             expect(priceText).to.equal('25')
            })

          }
      

})





})
})
