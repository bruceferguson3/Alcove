describe('Button shows modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/listing');
  });

  it('should display the modal on click', () => {
    cy.get('.listingPicture').click();
    cy.get('.carousel-control-prev-icon')
  });
})
