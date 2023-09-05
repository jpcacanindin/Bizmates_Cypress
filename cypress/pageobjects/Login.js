class Login
{
    navLogin='#login2'
    navLogout='#logout2'
    navSignUp='#signin2'
    username='#loginusername'
    password='#loginpassword'
    loginButton='#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    textWelcome='#nameofuser'
   
    clickNavLogin()
    {
        cy.get(this.navLogin).click()
    }

    clickNavLogout()
    {
        cy.get(this.navLogout).click()
    }

    clickNavSignUp()
    {
        return cy.get(this.navSignUp)
    }

    setUserName(username)
    {
        cy.get(this.username).type(username)
    }

    setPassword(password)
    {
        cy.get(this.password).type(password)
    }

    clickSubmit()
    {
        cy.get(this.loginButton).click()
    }
    
    getWelcome()
    {
        return cy.get(this.textWelcome)
    }

}

export default Login;