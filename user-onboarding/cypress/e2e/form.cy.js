describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // Helpers to centralize the CSS selectors and clean up the tests a bit.
    const nameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const pwInput = () => cy.get('input[name=password]')
    const submitBtn = () => cy.get(`input[type="submit"]`)
    const TOSCheckBx = () => cy.get(`input[type="checkbox"]`)

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        pwInput().should('exist')
        submitBtn().should('exist')
        TOSCheckBx().should('exist')
        cy.contains(/create a friend!/i).should('exist')
      })

})