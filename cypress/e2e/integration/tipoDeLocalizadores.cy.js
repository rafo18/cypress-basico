describe('tipos de localizadores', () => {

    beforeEach('url' , () => {
        cy.visit('/simple-html-elements-for-automation/');

    })
    
    it('obtener por medio de tag', () => {
        cy.get('input')
    });

    it('obtener por medio de placeholder', () => {
        cy.get("[placeholder = 'Name']")
    });

    it('obtener por medio de ID', () => {
        cy.get('#et_pb_contact_email_0')
    });

    it('obtener por medio de clase', () => {
        cy.get('.input');
    });

    it('usando contains', () => {
        cy.contains('Female')
    });
    it('usando parents', () => {
        cy.get("[placeholder = 'Name']").parents();
    });

   
});