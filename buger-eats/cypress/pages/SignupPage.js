class SignupPage {
    //acessa pag de cadastro
    go() {
        
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        //checkpoint:
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }
    //preenche formul de cadastro
    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //Junta localizador CSS com texto 
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        // drag n drop a partir de cy 9.3.0
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/' + deliver.cnh,
            { force: true, action: 'drag-drop' })
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectMessage)
    }
    alertMessageShouldBe(expectMessage){
        cy.get('.alert-error').should('have.text', expectMessage)
    }
    
}
//exporta classe já instanciada
export default new SignupPage;
