import {Selector,t} from "testcafe"
import {FAKEDATA} from '../data/tasks'

class taskPage{
    constructor(){
        this.pageTitle = Selector('h1 span')
        this.addTaskPlusBtn = Selector('.plus_add_button')
        this.taskTextField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.addTaskBtn = Selector('.ist_button.ist_button_red')
        this.cancelBtn  = Selector('.cancel')
        this.getAllTask = Selector('.task_list_item__content')
        this.getTask = Selector('.task_list_item__info_tags')
        this.getTaskName = Selector('.markdown_content')
        this.deleteTaskBtn = Selector('.danger_menu .icon_menu_item__content')
        this.deleteConfirmationBtn = Selector('.ist_button.ist_button_red')
    }
    
    //method to add tasks with static word
    async addTasks(numberOfTask){
      await t
          .click(this.addTaskPlusBtn)
          // "j" variable used to count number of task added
          let j = 0

          for(let i = 0; i <=numberOfTask; i++){ 
            await t
                   .typeText(this.taskTextField, 'test '+i )
                   
                   .click(this.addTaskBtn)
              j++
              if(j=== numberOfTask){
                await t.click(this.cancelBtn)
                break
              }
          }
    }

    //Method to add tasks with Dinamic word using faker
    async addTasksFake(numberOfTask){
      await t
          .click(this.addTaskPlusBtn)
          // "j" variable used to count number of task added
          let j = 0

          for(let i = 0; i <=numberOfTask; i++){ 
            await t
                   .wait(2000)
                   .typeText(this.taskTextField, FAKEDATA.FAKE.FAKEWORD, { paste: true } )
                   .click(this.addTaskBtn)  
                 j++
              if(j=== numberOfTask){
                await t.click(this.cancelBtn)
                break
              }
          }
    }


    //Method to delete tasks
    async deleteTasks(taskAdded){
      
      if(taskAdded === 0){
        console.log('there is no Task added')
      }  else{
        // "j" variable used to count number of task added to be deleted
           let j = taskAdded
             for(let i=0; i <= taskAdded; i++){
                await t
                  .rightClick(this.getTask)
                  .click(this.deleteTaskBtn)
                  .click(this.deleteConfirmationBtn)
                  j--
          if (j=== 0){
          console.log('test passed')
          break
          }

        }     
      }
    }
}

export default new taskPage()
