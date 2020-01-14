describe('Test submission of post form', function() {
    
    it('should not navigate to preview page on submission of a incomplete form', function() {
        cy.visit('http://localhost:3030/post')

        cy.contains('submit').click()

        cy.url().should('include', 'post')
    })

    it('should navigate to the preview page on submission of a complete form', function() {
        cy.visit('http://localhost:3030/post')

        cy.get('textarea').type('hello')
        cy.get('input[placeholder="Name"]').type('hello')
        cy.get('input[placeholder="Email"]').type('hello')
        cy.get('input[placeholder="Phone"]').type('hello')
        cy.get('input[placeholder="Zipcode"]').type('hello')
        cy.get('input[type="radio"][value=true]').check({force: true})

        cy.contains('submit').click()

        cy.url().should('include', 'preview')
    })

})

describe('Test header navigation link', function() {

    it('should change to landing page from results page', function() {
        cy.visit('http://localhost:3030/results')

        cy.contains('Alcove').click()

        cy.url().should('eq', 'http://localhost:3030')
    })

    it('should change to landing page from post page', function() {
        cy.visit('http://localhost:3030/post')

        cy.contains('Alcove').click()

        cy.url().should('eq', 'http://localhost:3030')
    })

    it('should change to landing page from listing page', function() {
        cy.visit('http://localhost:3030/listing')

        cy.contains('Alcove').click()

        cy.url().should('eq', 'http://localhost:3030')
    })

})

describe('should search by zip code from landing page', function() {

    it('should not navigate away if zip code is invalid', function() {
        cy.visit('http://localhost:3030')
    
        cy.get('input[placeholder="Enter zip code"]').type('hello')
    
        cy.contains('Find Storage Units').click()

        cy.url().should('eq', 'http://localhost:3030')
    })

    it('should navigate to results page if valid zip code enteres', function() {
        cy.visit('http://localhost:3030')
    
        cy.get('input[placeholder="Enter zip code"]').type('77437')
    
        cy.contains('Find Storage Units').click()

        cy.url().should('eq', 'http://localhost:3030/results')
    })

})