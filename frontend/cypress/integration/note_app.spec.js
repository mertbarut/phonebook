describe('Phonebook app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Mert Barut',
      username: 'mbarut',
      password: '123456'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user) 
    cy.visit('http://localhost:3001')
  })

  it('front page can be opened', function() {
    cy.contains('Phonebook')
  })

  it('login form can be opened', function() {
    cy.contains('log in').click()
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('log in').click()
      cy.get('#username').type('mbarut')
      cy.get('#password').type('123456')
      cy.get('#login-button').click()
    })

    it('a new person can be added', function() {
      cy.contains('new person').click()
      cy.get('#new-person-name').type('a person added by cypress')
      cy.get('#new-person-number').type('a number added by cypress')
      cy.get('#new-person-add-button').click()
      cy.contains('a person added by cypress')
      cy.contains('a number added by cypress')
    })

    it('a new blog can be added', function() {
      cy.contains('new blog').click()
      cy.get('#new-blog-title').type('a blog title added by cypress')
      cy.get('#new-blog-author').type('a blog author added by cypress')
      cy.get('#new-blog-url').type('a blog url added by cypress')
      cy.get('#new-blog-add-button').click()
      cy.contains('a blog title added by cypress')
      cy.contains('a blog author added by cypress')
      cy.contains('a blog url added by cypress')
    })

    it.only('a blog can be liked', function() {
      cy.contains('new blog').click()
      cy.get('#new-blog-title').type('a blog title added by cypress')
      cy.get('#new-blog-author').type('a blog author added by cypress')
      cy.get('#new-blog-url').type('a blog url added by cypress')
      cy.get('#new-blog-add-button').click()
      cy
        .contains('view').click()
        .get('.like-button')
        .as('theLikeButton')
        .click()
      
      cy
        .get('.delete-button')
        .click()

    })
  })

  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('mbarut')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.top-notification').should('contain', 'Wrong Credentials')
    cy.get('.top-notification').should('have.css', 'color', 'rgb(135, 206, 235)')
    cy.get('.top-notification').should('have.css', 'border-style', 'solid')
  })

})
