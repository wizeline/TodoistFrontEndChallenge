import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'
import {CREDENTIALS} from '../data/users'


fixture('Login feature')
            .page`https://todoist.com`
            .beforeEach(async t =>{
              await t.click(WelcomePage.loginBtn)
            })

//test to verify the login with valid credentials
test('Valid Credentials', async t =>{
  await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
  await t.wait(5000)
  await t.expect(taskPage.pageTitle.exists).ok()
})

// test to verify the error message with Invalid credentials
test('Wrong Credentials', async t =>{
 await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
 await t.expect(LoginPage.errorMessage.exists).ok()   
})

// test to verify the error message without credentials
test('Empty Credencials', async t =>{
await LoginPage.submitLogin(null,null)
await t.expect(LoginPage.errorMessage.exists).ok()   
})

// test to verify error message with only user 
test('Only User', async t =>{
await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,null)
await t.expect(LoginPage.errorMessage.exists).ok()
})

// test to verify eeror message with only password
test('Only Password', async t =>{
await LoginPage.submitLogin(null,CREDENTIALS.VALID_USER.PASSWORD)
await t.expect(LoginPage.errorMessage.exists).ok()
})


