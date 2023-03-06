beforeEach(() => {
    cy.visit('www.facebook.com')
})

describe('Esperando por elementos', () => {
    
    it('Esperar por un tiempo definido', () => {
        cy.wait(5000)
    });

    it('Esperar por un elementon', () => {
        cy.get('[data-testid="royal_login_button"]' , {timeout: 5000})
    });

    it('esperar por un elemento y hacer una asercion', () => {
        cy.get('[data-testid="royal_login_button"]', {timeout: 6000 }).should('be.visible');
    });


});


describe('deshabilitar el timeout', () => {
    it('timeout', () => {
    // cy.get('[data-testid="royal_login_button"]', {timeout: 6000 });
    cy.get('[data-testid="royal_login_button"]', {timeout:0 });
        
    });
});