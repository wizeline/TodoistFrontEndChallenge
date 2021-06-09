import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import TaskPage from '../pages/taskPage'
//import faker from "faker"

import {CREDENTIALS} from '../data/users'
import {NUMBEROFTASKTOADD, FAKEDATA} from '../data/tasks'



fixture('Create Tasks feature')
        .page`https://todoist.com`
        .beforeEach(async t =>{
        await t.click(WelcomePage.loginBtn)
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        await t.wait(4000)
        let numberOfTasks = await TaskPage.getTaskName.count
        console.log(numberOfTasks)
        await TaskPage.deleteTasks(numberOfTasks)
    })

test('Add one task', async t =>{
    
    await TaskPage.addTasks(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
   await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
   await t.expect(await TaskPage.getTaskName.innerText).contains('test')

})

test('Add 10 tasks', async t =>{
    await TaskPage.addTasks(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
    for(let i=0; i<= numberOfTasks; i++){
        await t.expect(await TaskPage.getTaskName.innerText).contains('test')
    }
    await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
})

test('Add one task with faker', async t =>{
    await t.click(TaskPage.addTaskPlusBtn)
    console.log(FAKEDATA.FAKE.FAKEWORD)
    await t
    .wait(4000)
    .typeText(TaskPage.taskTextField,FAKEDATA.FAKE.FAKEWORD, { paste: true })   
    
    .click(TaskPage.addTaskBtn)
    .click(TaskPage.cancelBtn)
})

test('Add one task with Faker word', async t =>{
    await TaskPage.deleteTasks()
    await TaskPage.addTasksFake(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
   await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.ONE_TASK.TASKNUMBER)
   await t.expect(await TaskPage.getTaskName.innerText).contains(FAKEDATA.FAKE.FAKEWORD)

})

test('Add 10 task with Faker word', async t =>{
    await TaskPage.addTasksFake(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
    let numberOfTasks = await TaskPage.getTaskName.count
    console.log(numberOfTasks)
    for(let i=0; i<= numberOfTasks; i++){
        await t.expect(await TaskPage.getTaskName.innerText).contains(FAKEDATA.FAKE.FAKEWORD)
    }
    await t.expect(await TaskPage.getTaskName.count).eql(NUMBEROFTASKTOADD.TEN_TASKS.TASKNUMBER)
})

