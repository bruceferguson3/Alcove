describe('Button shows modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/listing');
  });

  it('should display the modal on click', () => {
    cy.get('button[id="listingModalButton"]').click();
    cy.get('modal').should('be.visible');
  });
})
