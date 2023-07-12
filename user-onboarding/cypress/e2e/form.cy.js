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
        cy.get(`input[type="checkbox"]`).should('not.be.checked')
    })

    describe('Filling out the inputs and submit to DOM', () => {
        // We use optional "describe" blocks to organize and group our tests.
        it('can navigate to the site', () => {
          cy.url().should('include', 'localhost')
        })
    
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('BBark93')
                .should('have.value', 'BBark93')
    
            emailInput()
                .should('have.value', '')
                .type('bbark93@gmail.com')
                .should('have.value', 'bbark93@gmail.com')

            pwInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })

        it('can check tos checkbox', () => {
            cy.get(`input[type="checkbox"]`)
                .check()
                .should('be.checked')
        })

        it('can submit inputs and input appears on DOM', () => {
            nameInput().type('BBark93')
            emailInput().type('bbark93@gmail.com')
            pwInput().type('password')
            submitBtn().click()
            cy.contains(/bbark93@gmail.com/).should('exist')
        })
    })


})