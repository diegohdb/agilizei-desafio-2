const el = require('./elements').ELEMENTS

class Login {

    accessLoginPage(){
        cy.visit('login')
    }

    fillForm(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    submitLoginForm(){
        cy.get(el.submitButton).click()
    }

    validateLogin(){
        cy.server()
        cy.route('GET', '**api/tags**').as('getTags');
        cy.route('GET', '**api/articles/feed?**').as('getFeed');

        cy.wait('@getFeed').then((resGetFeed) => {
            expect(resGetFeed.status).to.eq(200)
        })
        cy.wait('@getTags').then((resGetTags) => {
            expect(resGetTags.status).to.eq(200)
        })

        cy.url().should('eq', 'https://demo.realworld.io/#/')
    }
}

export default new Login();