describe('Navigation from landing page', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030');
      });
    it('should navigate to results page if valid zip entered and button clicked', function() {
        cy.get('input[placeholder="Enter zip code"]').type('78745')
        cy.contains('Find Spaces or Items').click()
        cy.url().should('include', 'results')
    })
    it('should not navigate to results page if invalid zip entered and button clicked', function() {
        cy.get('input[placeholder="Enter zip code"]').type('234')
        cy.contains('Find Spaces or Items').click()
        cy.url().should('eq', 'http://localhost:3030/')
    })
    it('should navigate to post page on button click', function() {
        cy.contains('Post a Space or Item').click()
        cy.url().should('include', 'post')
    })
    it('should route to Our Team page on link click', function() {
        cy.contains('Our Team').click()
        cy.url().should('include', 'teams')
    })
    it('should route to Features page on link click', function() {
        cy.contains('Features').click()
        cy.url().should('include', 'features')
    })
    it('should route to Contact page on link click', function() {
        cy.contains('Contact Us').click()
        cy.url().should('include', 'contact')
    })
    it('should route to Home page on link click', function() {
        cy.contains('Contact Us').click()
        cy.contains('Home').click()
        cy.url().should('eq', 'http://localhost:3030/')
    })
})

describe('NavBar Search Feature', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030')
        cy.contains('Contact Us').click()
    })
    it('should display search bar in navbar', function() {
        cy.get('input[placeholder="Enter zip code"]')
    })
    it('should display Find Items/Units button in NavBar search feature', function() {
        cy.contains('Find Items/Units')
    })
    it('should display Post Items/Units button in NavBar search feature', function() {
        cy.contains('Post Items/Units')
    })
    it('should search when valid zipcode input', function() {
        cy.get('input[placeholder="Enter zip code"]').type('78745')
        cy.contains('Find Items/Units').click()
        cy.url().should('include', 'results')
    })
    it('should not search when invalid zipcode input', function() {
        cy.get('input[placeholder="Enter zip code"]').type('787')
        cy.contains('Find Items/Units').click()
        cy.url().should('include', 'contact')
    })
    it('should route to post page on click', function() {
        cy.contains('Post Items/Units').click()
        cy.url().should('include', 'post')
    })
})