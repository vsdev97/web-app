describe('Demo Test', () => {
    it('loads the home page', () => {
      cy.visit('/');
      cy.contains('Make a Difference with IKSHANA CHARITABLE TRUST').should('be.visible');
    });
  });
  