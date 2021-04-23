import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import LandingPage from '../pages/landingPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Login feature')
            .page`https://todoist.com`

test('Successful login', async t =>{
     await t
       .click(WelcomePage.loginBtn)
       .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
       .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
       .click(LoginPage.loginBtn)
     await t.expect(LandingPage.pageTitle.exists).ok()
})

test('Unsuccessful login', async t =>{
    await t
        .click(WelcomePage.loginBtn)
        .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginBtn)
    await t.expect(LoginPage.errorMessage.exists).ok()   
})
