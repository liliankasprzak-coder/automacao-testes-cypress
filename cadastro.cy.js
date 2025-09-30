describe('Cadastro', () => {

    it('Deve cadastrar um novo usuário com sucesso', () => {
        cy.visit('/')

        cy.get('.fa-lock').click()

        cy.get('#user').type('Lilian Raphaele Kasprzak')
        cy.get('#email').type('liliankasprzak@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

        cy.get('.swal2-popup')
            .should('be.visible')
            .within(() => {
                cy.get('#swal2-title').should('contain', 'Cadastro realizado!')
                cy.get('.swal2-confirm').click()
            })
    })

    it('Deve exibir mensagem de erro ao inserir e-mail inválido', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()

        cy.get('#user').type('Lilian Raphaele Kasprzak')
        cy.get('#email').type('lilian@')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain', 'O campo e-mail deve ser prenchido corretamente')

    })

        it('Deve exibir mensagem de erro ao deixar o campo nome em branco', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()

        cy.get('#user').clear()
        cy.get('#email').type('lilian@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain', 'O campo nome deve ser prenchido')

    })

                it('Deve exibir mensagem de erro ao deixar o campo e-mail em branco', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()

        cy.get('#user').type('Lilian Raphaele Kasprzak')
        cy.get('#email').clear()
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain', 'O campo e-mail deve ser prenchido corretamente')

    })

            it('Deve exibir mensagem de erro ao deixar o campo senha em branco', () => {
        cy.visit('/')
        cy.get('.fa-lock').click()

        cy.get('#user').type('Lilian Raphaele Kasprzak')
        cy.get('#email').type('lilian@gmail.com')
        cy.get('#password').clear()
        cy.get('#btnRegister').click()

        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain', 'O campo senha deve ter pelo menos 6 dígitos')

    })
})