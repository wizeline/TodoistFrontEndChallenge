import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('.input_email')
        this.passwordField = Selector('.form_field_control')
        this.loginBtn  = Selector('.submit_btn')
        this.errorMessage = Selector('.error_msg')
    }


async submitLogin(userName, password){
    if(userName && password === null){
        await t
         .typeText(this.userNameField, userName)
         .click(this.loginBtn)
    }else if(userName === null && password){
        await t
        .typeText(this.passwordField, password)
        .click(this.loginBtn)
    }else if(userName === null && password === null){
        await t
        .click(this.loginBtn)
    }else{
        await t
        .typeText(this.userNameField, userName)
        .typeText(this.passwordField, password)
        .click(this.loginBtn)
    } 
}


}

export default new LoginPage()