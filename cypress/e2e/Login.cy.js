import Login from "../pageobjects/Login.js"

describe ('Login', () => {

    //This loads user data from fixture file
    let userdata
    beforeEach (() => {
        cy.fixture('Login').then((data) => {
            userdata = data
        })

        cy.visit('https://www.demoblaze.com/index.html');
    })

    it ('Checks if user can login', () => {
        const ln=new Login();

        //Login test
        ln.clickNavLogin()
        cy.wait(1000);
        ln.setUserName(userdata.validUser.username)
        ln.setPassword(userdata.validUser.password)
        ln.clickSubmit()
        ln.getWelcome().should('have.text', userdata.validUser.welcome);

        //Logout test
        ln.clickNavLogout()
        ln.clickNavSignUp().should('be.visible')
    })

    it ('Checks if user can login with blank fields', () => {
        const ln=new Login();

        //Login test
        ln.clickNavLogin()
        cy.wait(1000);
        ln.clickSubmit()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('Please fill out Username and Password.')
        })
    })
    
    it ('Checks if user can login with missing password', () => {
        const ln=new Login();

        //Login test
        ln.clickNavLogin()
        cy.wait(1000);
        ln.setUserName(userdata.validUser.username)
        ln.clickSubmit()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('Please fill out Username and Password.')
        })
    })

    it ('Checks if user can login with missing username', () => {
        const ln=new Login();

        //Login test
        ln.clickNavLogin()
        cy.wait(1000);
        ln.setPassword(userdata.validUser.password)
        ln.clickSubmit()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('Please fill out Username and Password.')
        })
    })

    it ('Checks if user can login with missing account', () => {
        const ln=new Login();

        //Login test
        ln.clickNavLogin()
        cy.wait(1000);

        ln.setUserName(userdata.invalidUser.username)
        ln.setPassword(userdata.invalidUser.password)
        ln.clickSubmit()

        cy.on('window:alert', (t) => {
            expect(t).to.contain('User does not exist.')
        })
    })
}) 