/// <reference types="Cypress" />

describe('Search elements', () => {
    beforeEach(()=>{
        cy.visit('/')
    })
    
    it('Search for elements with multiple results', () => {
        cy.fixture('index').then(data => {
            cy.get(data.searchBox).type('dress')
            cy.get(data.searchButton).click()
        })
        cy.fixture('searchResult').then(data => {
            cy.get(data.title).should('contain', 'dress')
        })
    })

    it('Search for elements with no results', ()=>{
        cy.fixture('index').then(data => {
            cy.get(data.searchBox).type('qwerty')
            cy.get(data.searchButton).click()
        })
        cy.fixture('searchResult').then(data => {
            cy.get(data.alert).should('contain', 'No results were found for your search')
        })
    })
})