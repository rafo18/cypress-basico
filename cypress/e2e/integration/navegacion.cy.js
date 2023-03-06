describe('Navegacion', () => {
    it('visita google', () => {
        cy.visit('www.google.com');
    });

    it('recagrar pagina', () => {
        cy.reload();
    });

    it('recargar de forma forzada', () => {
        cy.visit('www.google.com');
        cy.reload(true)
    });

    it('navegar hacia atras', () => {
        cy.visit('www.google.com');
        cy.visit('https://www.google.com/search?q=cypress&sxsrf=AJOqlzVwhQE5xBh7_8Ieb8iLpbPuE3k6_A%3A1677785980845&source=hp&ei=fPsAZImsMfLd1sQPt4KhmAY&iflsig=AK50M_UAAAAAZAEJjCBOrbdC49_cKhBWrKkVApIlasn-&oq=&gs_lcp=Cgdnd3Mtd2l6EAMYATIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg8BBoAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz');
        cy.go("back")
        cy.go("forward")
         
    });
});