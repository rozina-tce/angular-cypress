describe('My App', () => {

  it('loads', () => {
    cy.visit('/');
    cy.get('span').contains('Welcome');
  });

});