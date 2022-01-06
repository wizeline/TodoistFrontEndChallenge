import {Selector,t} from "testcafe"


class taskPage{
    constructor(){
        this.pageTitle = Selector('h1 span')
        this.addTaskPlusBtn = Selector('button.plus_add_button')
        this.taskTextField = Selector('div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskDescription = Selector('textarea.task_editor__description_field')
        this.addTaskBtn = Selector('button.reactist_button.reactist_button--primary')
        this.cancelBtn  = Selector('button.reactist_button.reactist_button--secondary')
        this.getAllTask = Selector('.task_list_item__content')
        this.getTask = Selector('span.task_list_item__project')
        this.getTaskName = Selector('.markdown_content.task_content')
        this.deleteTaskBtn = Selector('li.menu_item.icon_menu_item.danger_menu')
        this.deleteConfirmationBtn = Selector('.reactist_modal_box__actions .ist_button.ist_button_red')
        this.gotItBtn = Selector('.reactist_button.reactist_button--primary')
    }
    



    //method to add tasks 
    async addTasks(numberOfTask, taskName){
      await t
          .click(this.addTaskPlusBtn)
          // "j" variable used to count number of task added
          let j = 0
          
          for(let i = 0; i <=numberOfTask; i++){ 
            await t
                   .typeText(this.taskTextField, taskName + "_" + i )
                   .typeText(this.taskDescription, taskName + "_" + i)
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
          break
          }

        }     
      }
    }
}

export default new taskPage()
