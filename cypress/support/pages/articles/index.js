const faker = require('faker');
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {

    accessNewArticle(){
        cy.get(el.linkNewPost).click()
    }

    fillForm(){
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypres')       
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('Cypres')
    }

    submitArticle(){
        cy.get(el.submitButton).click()
    }

    validateSubmission(){
        
        cy.wait(`@${Routes.as.postArticles}`).then((postArticleResponse) => {
            expect(postArticleResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticleComments}`).then((resGetComments) => {
            expect(resGetComments.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticleTitle}`).then((resGetTitle) => {
            expect(resGetTitle.status).to.eq(200)
        })
        cy.url().should('contain', 'article')
    }
}

export default new Articles();