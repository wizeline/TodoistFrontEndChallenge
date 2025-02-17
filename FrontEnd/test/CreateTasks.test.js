import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import TaskPage from '../pages/taskPage'
//import faker from "faker"

import {CREDENTIALS} from '../data/users'
import {NUMBEROFTASKTOADD, DATA} from '../data/tasks'



fixture('Create Tasks feature')
        .page`https://todoist.com`
        .beforeEach(async t =>{
        await t.click(WelcomePage.loginBtn)
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.wait(5000)
        let numberOfTasks = await TaskPage.getTaskName.count
        console.log('number of tasks added to delete '+numberOfTasks)
        await TaskPage.deleteTasks( numberOfTasks)
    })

test('Add one task', async t =>{
    await TaskPage.addTasks(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER,DATA.STATICWORD.WORD)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
   await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
   await t.expect(await TaskPage.getTaskName.innerText).contains(DATA.STATICWORD.WORD)

})

test('Add 10 tasks', async t =>{
    await TaskPage.addTasks(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER, DATA.STATICWORD.WORD)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
    for(let i=0; i<= numberOfTasks; i++){
        await t.expect(await TaskPage.getTaskName.innerText).contains(DATA.STATICWORD.WORD)
    }
    await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
})

test('Add one task with Faker word', async t =>{
    await TaskPage.addTasks(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER, DATA.FAKE.FAKEWORD)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
   await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
   await t.expect(await TaskPage.getTaskName.innerText).contains(DATA.FAKE.FAKEWORD)

})

test('Add 10 task with Faker word', async t =>{
    await TaskPage.addTasks(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER, DATA.FAKE.FAKEWORD)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
    for(let i=0; i<= numberOfTasks; i++){
        await t.expect(await TaskPage.getTaskName.innerText).contains(DATA.FAKE.FAKEWORD)
    }
    await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
})

