const faker = require('faker')
const el = require('./elements').ELEMENTS

class Register {

    accessRegisterPage(){
        cy.visit('register')
    }

    fillForm(){
        cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type("Test@123");
    }

    submitRegisterForm(){
        cy.get(el.submitButton).click();
    }

    validRegistration(){
        cy.server()
        cy.route('GET', '**api/articles/feed?**').as('getFeed');
        cy.wait('@getFeed').then((resGetFeed) => {
            expect(resGetFeed.status).to.eq(200)
        })
        cy.url().should('eq', 'https://demo.realworld.io/#/')
    }

}

export default new Register();