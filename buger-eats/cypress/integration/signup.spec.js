import signup from "../pages/SignupPage"
import signupFactory from '../factories/SignupFactory'
describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver.json').then((d) => {
            this.deliver = d
        })
        //Usa o arq de massa dentro de fixture, pega o resultado da promisse chamando a sub-função "then" com argumento "d" representando os itens de deliver.
        //"this" é uma palavra reservada para criar uma var de contexto deliver com valor d, que é a massa inteira de teste do arquivo json 
    });
    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()
        
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectMessage)
    })

    it('Incorrect document', function () {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Incorrect email', function () {
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
})