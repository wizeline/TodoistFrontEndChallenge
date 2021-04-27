import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import LandingPage from '../pages/landingPage'
import {CREDENTIALS,NUMBEROFTASKTOADD} from '../data/Constants'

fixture('Create Tasks feature')
        .page`https://todoist.com`
        .beforeEach(async t =>{
        await t.click(WelcomePage.loginBtn)
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        })

test('Add one task', async t =>{
    await LandingPage.addTasks(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
})

test.only('Add 10 tasks', async t =>{
    await LandingPage.addTasks( NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
})