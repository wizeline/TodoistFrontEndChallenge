import {Selector,t} from "testcafe"

class LandingPage{
    constructor(){
        this.pageTitle = Selector('h1 span')
        this.addTaskPlusBtn = Selector('.plus_add_button')
        this.taskTextField = Selector('.public-DraftStyleDefault-block')
        this.addTaskBtn = Selector('.ist_button')
        this.cancelBtn  = Selector('.cancel')
        this.getAllTask = Selector('.task_list_item__content')
        this.getTask = Selector('.task_list_item__info_tags')
        this.getTaskName = Selector('.markdown_content').innerText;
        this.deleteTaskBtn = Selector('.danger_menu .icon_menu_item__content')
        this.deleteConfirmationBtn = Selector('.ist_button.ist_button_red')
    }
    
    async addTasks(numberOfTask){
        await t
          .click(this.addTaskPlusBtn)
          // "j" variable used to count number of task added
          let j = 0
          const randomTaskDescription = faker.lorem.sentence()

          for(var i = 0; i <=numberOfTask; i++){
              await t.typeText(this.taskTextField, randomTaskDescription)
              await t.click(this.addTaskBtn)
              j++
              if(j=== numberOfTask){
                await t.click(this.cancelBtn)
                break
              }
          }
    }

    async getTaskListElement(){
            let totalTask = this.getAllTask.count
             
            for(var i=0; i<=totalTas; i++){
            const taskName = this.getTaskName.textContent;
            }
            return taskName;
    } 
}

export default new LandingPage()