describe('Results Page', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/results');
    });
    it('should display no results if no zip code used', function() {
        cy.get('.no-listings')
    })
    it('should display new results on Update Zip Code click', function() {
        cy.get('[type="text"]').type('78745')
        cy.get('#results-zip-change').click()
        cy.contains('78745')
        cy.get('#results-list-container > :nth-child(1)')
    })
    it('should display no results for zip code with no results', function() {
        cy.get('[type="text"]').type('00000')
        cy.get('#results-zip-change').click()
        cy.contains('00000')
        cy.get('.no-listings')
    })
    it('filter by price on Apply Price Range click', function() {
        cy.get('[type="text"]').type('78745')
        cy.get('#results-zip-change').click()
    })
    it('should display Duration options', function() {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        cy.get('[data-value="space"]')
        cy.get('[data-value="item"]')
    })
    it('should display Size options', function() {
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="1"]')
        cy.get('[data-value="2"]')
        cy.get('[data-value="3"]')
        cy.get('[data-value="4"]')
        cy.get('[data-value="5"]')
    })
    it('should display Access Frequency options', function() {
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('[data-value="1"]')
        cy.get('[data-value="2"]')
        cy.get('[data-value="3"]')
    })
    it('should display Indoors/Outdoors options', function() {
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1)')
        cy.get('.dropdown-menu > :nth-child(2)')
        cy.get('.dropdown-menu > :nth-child(3)')
    })
    it('should display Locked options', function() {
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1)')
        cy.get('.dropdown-menu > :nth-child(2)')
    })
    it('should display Shared Storage options', function() {
        cy.get(':nth-child(7) > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1)')
        cy.get('.dropdown-menu > :nth-child(2)')
    })
    it('should navigate to product page on See Full Listing click', function() {
        cy.get('[type="text"]').type('78745')
        cy.get('#results-zip-change').click()
        cy.get(':nth-child(1) > .thumbnail-button').click()
        cy.url().should('include', 'listing')
    })
    it('should add type filter button on filter selection', function() {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        cy.get('[data-value="space"]').click()
        cy.get('[data-filter="type"]')
    })
    it('should add duration filter button on filter selection', function() {
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('[data-value="1"]').click()
        cy.get('[data-filter="duration"]')
    })
    it('should add size filter button on filter selection', function() {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="1"]').click()
        cy.get('[data-filter="size"]')
    })
    it('should add ease-of-access filter button on filter selection', function() {
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="1"]').click()
        cy.get('[data-filter="easeOfAccess"]')
    })
    it('should add indoors and climate control filter buttons on filter selection', function() {
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.get('[data-filter="indoors"]')
        cy.get('[data-filter="climateControl"]')
    })
    it('should add locked filter button on filter selection', function() {
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.get('[data-filter="locked"]')
    })
    it('should add exclusivity filter button on filter selection', function() {
        cy.get(':nth-child(7) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.get('[data-filter="standAlone"]')
    })
    it('should change type filter on new selection', function() {
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        cy.get('[data-value="space"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Showing Only Spaces')
        })
        cy.get(':nth-child(1) > .dropdown-toggle').click()
        cy.get('[data-value="item"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Showing Only Items')
        })
    })
    it('should change duration filter on new selection', function() {
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('[data-value="1"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Less than a week')
        })
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.get('[data-value="2"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('1 to 4 weeks')
        })
    })
    it('should change size filter on new selection', function() {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="1"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Extra-Small')
        })
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="2"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Small')
        })
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="3"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Medium')
        })
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="4"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Large')
        })
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="5"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Extra-Large')
        })
    })
    it('should change access frequency filter on new selection', function() {
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="1"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Access Not Needed')
        })
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="2"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Infrequent')
        })
        cy.get(':nth-child(4) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > [data-value="3"]').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Frequent')
        })
    })
    it('should change indoors filter on new selection', function() {
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Climate Controlled')
        })
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(2)').click()
        cy.get('.ml-2').within(() => {
            cy.contains('Indoors')
        })
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(3)').click()
        cy.contains('No Results Found')
    })
    it('should change locked filter on new selection', function() {
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.contains('Locked')
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(2)').click()
        cy.contains('No Results Found')
    })
    it('should change exclusivity filter on new selection', function() {
        cy.get(':nth-child(7) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(1)').click()
        cy.contains('Exclusive Storage')
        cy.get(':nth-child(7) > .dropdown-toggle').click()
        cy.get('.show.dropdown > .dropdown-menu > :nth-child(2)').click()
        cy.contains('No Results Found')
    })
})