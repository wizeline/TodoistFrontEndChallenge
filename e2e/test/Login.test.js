import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import LandingPage from '../pages/taskPage'
<<<<<<< HEAD
import {CREDENTIALS} from '../data/Constants'
=======
import {CREDENTIALS} from '../data/users'
>>>>>>> upstream/main

fixture('Login feature')
            .page`https://todoist.com`
            .beforeEach(async t =>{
              await t.click(WelcomePage.loginBtn)
            })

test('Successful login', async t =>{
     await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
     await t.expect(LandingPage.pageTitle.exists).ok()
})

test('Unsuccessful login', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()   
})

// agregar mas teste negativos
