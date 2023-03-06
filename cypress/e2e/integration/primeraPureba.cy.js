describe('hola', () => {
    it('hola', () => {
        cy.visit('www.google.com');
    });

    it('segunda pagina', () => {
        cy.visit('www.google.com');
    });
    it('tercera pagina', () => {
        cy.visit('www.youtube.com');
    });
});