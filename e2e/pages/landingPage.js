import {Selector,t} from "testcafe"

class LandingPage{
    constructor(){
        this.pageTitle = Selector('.view_header__content h1 span')
        this.addTaskPlusBtn = Selector('.plus_add_button')
        this.taskTextField = Selector('.public-DraftStyleDefault-block')
        this.addTaskBtn = Selector('.ist_button')
        this.cancelBtn  = Selector('.cancel')
        this.getAllTask = Selector('.task_list_item__content')
        this.getTask = Selector('.task_list_item__info_tags')
        this.deleteTaskBtn = Selector('li.menu_item.icon_menu_item.danger_menu')
        this.deleteConfirmationBtn = Selector('.ist_button.ist_button_red')
    }
    
    async addTasks(numberOfTask){
        await t
          .click(this.addTaskPlusBtn)
          let j = 0
          let k = 1

          for(var i = 0; i <=numberOfTask; i++){
              await t.typeText(this.taskTextField, "test"+k)
              k++
              await t.click(this.addTaskBtn)
              j++
              if(j=== numberOfTask){
                await t.click(this.cancelBtn)
                break
              }
          }
    }

    async getNumberOfTaskAdded(){
            let totalTask = this.getAllTask.count

            array.forEach(element => {
                
            });

    }
}

export default new LandingPage()