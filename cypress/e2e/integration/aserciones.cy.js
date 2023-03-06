

describe('Aserciones',{browser: '!chrome'}, () => {
   
    beforeEach(() => {
        cy.visit('/simple-html-elements-for-automation/');
        
    });

    it('Asercion', () => {
        cy.url().should('include',"https://ultimateqa.com/");
        cy.get(':nth-child(3) > #button1').should('be.visible').and('have.text', 'Click Me!')
    });
    
    it('asercion 2', () => {
        cy.get(':nth-child(3) > #button1').then((btn) => {
            expect(btn).to.be.visible
            expect(btn).to.have.text('Click Me!')

        })

        cy.log('hola')

    });  

    

    
    
});