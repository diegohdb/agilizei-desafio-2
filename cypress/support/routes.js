class Routes {

    as = {
        postArticles: 'POSTArticle',
        getArticleTitle: 'GETArticleTitle',
        getArticleComments: 'GETArticleComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**api/articles').as(this.as.postArticles)
        cy.route('GET', '**api/articles/agilizei-title-**').as(this.as.getArticleTitle);
        cy.route('GET', '**api/articles/agilizei-title-**/comments').as(this.as.getArticleComments);
    }
}

export default new Routes();