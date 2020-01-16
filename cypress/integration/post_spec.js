describe('Step 1', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post');
    });
    it('should navigate to step 2 on extra space click', function() {
        cy.get('img[id="postPropertyImage"]').click()
        cy.contains('Contact Info')
    })
    it('should navigate to step 2 on extra items click', function() {
        cy.get('img[id="postItemImage"]').click()
        cy.contains('Contact Info')
    })
})

describe('Step 2', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
    })
    it('should navigate to step 3 on valid form submission', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
        cy.contains('Features')
    })
    it('should navigate to step 1 on back button click', function() {
        cy.contains('Back').click()
        cy.get('img[id="postItemImage"]')
    })
    it('should not navigate to step 3 without name entered', function() {
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid Email entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid phone number entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid zipcode entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 without price entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
})

describe('should search by zip code from landing page', function() {

    it('should not navigate away if zip code is invalid', function() {
        cy.visit('http://localhost:3030')

        cy.get('input[placeholder="Enter zip code"]').type('hello')

        cy.contains('Find Storage Units').click()

        cy.url().should('eq', 'http://localhost:3030/')
    })

    it('should navigate to results page if valid zip code entered', function() {
        cy.visit('http://localhost:3030')

        cy.get('input[placeholder="Enter zip code"]').type('77437')

        cy.contains('Find Storage Units').click()

        cy.url().should('eq', 'http://localhost:3030/results')
    })

})
