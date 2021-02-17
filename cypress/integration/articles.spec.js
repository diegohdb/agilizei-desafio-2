/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Posts', () => {
    // hooks -> Before and After tests
    beforeEach(() => {
        cy.backgroundLogin()
        articles.accessNewArticle()
    });
   
    it('Create a new post', () => {
        articles.fillForm()
        articles.submitArticle()
        articles.validateSubmission()
    });
    
});