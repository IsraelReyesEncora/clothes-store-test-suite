Cypress.Commands.add('login', (user, password)=>{
    cy.fixture('login').then(login => {
        cy.get(login.loginlink).click()
        cy.get(login.email).type(user)
        cy.get(login.password).type(password)
        cy.get(login.loginButton).click()
    })
})