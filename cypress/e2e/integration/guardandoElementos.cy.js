describe('Guardando elementos', () => {
    
    beforeEach(() => {
        cy.visit('/simple-html-elements-for-automation/');
    });
    
    it('evitar repeticiones', () => {
        cy.get('input').log('hola')
        cy.get('button');
        
        
    });

    it('haciendo aserciones', () => {
        cy.get('input').parents().then((all) => {
            const inputs = all.find('input')
            const buttons = all.find('button')

            cy.task('log' , inputs.length)
            cy.log('longitud', inputs.length)

            // expect(inputs.length).to.equal(11)
            cy.wrap(inputs).should('have.length', 11)
            // expect(buttons.length).to.equal(11)
            

        });
    });
});