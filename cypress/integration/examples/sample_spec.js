describe('Test submission', function() {
    it('should navigate to preview page on submission of a completed form', function() {
        cy.visit('http://localhost:3030/post')

        cy.contains('submit').click()

        cy.url()
        .should('include', 'preview')
    })
})