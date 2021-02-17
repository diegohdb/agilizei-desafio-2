/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Successful login', () => {
        login.accessLoginPage()
        login.fillForm()
        login.submitLoginForm()   
        login.validateLogin()     
    });
});