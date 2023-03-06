describe('Interactuando con elementos', () => {
    // beforeEach(() => {
    //     cy.visit('/simple-html-elements-for-automation/');
    // });

    it('click', () => {
        // cy.get('.buttonClass').click();
        cy.get('#idExample').should('be.visible').and('contain', 'Click this button using "ID"').click();
    });

    it('double click', () => {
        cy.get('#idExample').should('be.visible').and('contain', 'Click this button using "ID"').dblclick();
    });

    it('right click', () => {
        cy.get('#idExample').should('be.visible').and('contain', 'Click this button using "ID"').rightclick();
    });

    it('interactuando con elementos tipo texto', () => {
        cy.get('#et_pb_contact_name_0').type('rafael')
        cy.get('#et_pb_contact_email_0').type("Barreto")
    });

    it('checkBoxes', () => {
        cy.get('[value="male"]').click()
        cy.get('[value="Bike"]').check()
    });

    it('Extrayendo informacion', function() {
        cy.get('#et_pb_contact_name_0').as('name');
        cy.get('@name').type('rafael')

        cy.get('@name').invoke('val').as('valor')
    });

    it('compartir info', function() {
        cy.get('#et_pb_contact_email_0').type(this.valor)
    });

    it('interactuando con los dropdown', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('.custom-select').select(10)
        cy.get('.custom-select').select('3').should('have.value' , '3')
    });

    it('interactuando select dinamico', () => {
        cy.visit('https://react-select.com/home');
        cy.get('#react-select-4-input').click();
        // cy.get('#react-select-4-listbox').children().children().each( (element , index , list) => {
        //     if (element.text() === 'Green') {
        //         element.click()
        //     }
        // });

        cy.get('#react-select-4-option-8').click();

    });

    it('interactuando con tablas', () => {
        cy.visit('https://www.w3schools.com/html/html_tables.asp');
        // cy.get('#customers').find('th').each( (ele) => {
        //     cy.log(ele.text());
        // });
        // cy.get('#customers')
        // .find('th')
        // .eq(2)
        // .invoke('text')
        // .should("equal" , 'Country')

        cy.get('#customers')
        .find('tr')
        .eq(5)
        .find('td')
        .eq(2)
        .invoke('text')
        .should('equal' , 'Canada')

    });

    it('interactuando con date pickers', () => {
        cy.visit('https://material.angular.io/components/datepicker/overview');
        cy.get('#mat-input-0').type('11/03/2022' , {force:true})
    });

    it('popups y toolstips', () => {
        cy.visit('https://demoqa.com/modal-dialogs');
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    });
    it('popups y toolstips', () => {
        cy.visit('https://demo.guru99.com/V4/index.php');

        ///forma 1
        // const stub = cy.stub();
        // cy.get('[type="submit"]').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('User or Password is not valid')
        // });

        ///forma 2

        cy.get('[type="submit"]').click()

        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('User or Password is not valid')
         });



        
    });

    it('tooltips', () => {
        cy.visit('https://demoqa.com/tool-tips');
        cy.get('#toolTipButton').trigger('mouseover')
    });

    it.only('drag and drops', () => {
        cy.visit('https://demoqa.com/dragabble');
        cy.get('#dragBox').trigger('mousedown' , {
            which:1,
            pageX: 600,
            pageY: 100
        })
        .trigger('mousemove' ,{ 
            which:1,
            pageX:600,
            pageY:600
        })
        .trigger('mouseup')
        cy.clear('')
    });
});
    