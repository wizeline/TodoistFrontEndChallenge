import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'
import {CREDENTIALS} from '../data/users'


fixture('Login feature')
            .page`https://todoist.com`
            .beforeEach(async t =>{
              await t.click(WelcomePage.loginBtn)
            })

test('Valid Credentials', async t =>{
     await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
     await t.wait(5000)
     await t.expect(taskPage.pageTitle.exists).ok()
})

test('Wrong Credentials', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()   
})

test('Empty Credencials', async t =>{
  await LoginPage.submitLoginE()
  await t.expect(LoginPage.errorMessage.exists).ok()   
})

test('Only User', async t =>{
  await LoginPage.submitLoginU(CREDENTIALS.VALID_USER.USERNAME)
  await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Only Password', async t =>{
  await LoginPage.submitLoginP(CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessage.exists).ok()
})

