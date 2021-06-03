import WelcomePage from '../pages/welcomePage'
import LoginPage from '../pages/loginPage'
import TaskPage from '../pages/taskPage'
//import faker from "faker"

import {CREDENTIALS} from '../data/users'
import {NUMBEROFTASKTOADD} from '../data/tasks'



fixture('Create Tasks feature')
        .page`https://todoist.com`
        .beforeEach(async t =>{
        await t.click(WelcomePage.loginBtn)
        await LoginPage.submitLogin(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        
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

/*test.only('Add one task with faker', async t =>{
    await t.click(TaskPage.addTaskPlusBtn)
    //let randomTaskName = faker.lorem.word();
   // console.log(randomTaskName)
    await t
    .typeText(randomTaskName)
    .click(TaskPage.addTaskBtn)
    .click(TaskPage.cancelBtn)

})*/