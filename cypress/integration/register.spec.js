/// <reference types="cypress" />

import register from '../support/pages/register'

context('Registration', () => {
    it('Register a new user', () => {
        register.accessRegisterPage()
        register.fillForm()
        register.submitRegisterForm()
        register.validRegistration()
    });
});