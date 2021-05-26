import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('.input_email')
        this.passwordField = Selector('.form_field_control')
        this.loginBtn  = Selector('.submit_btn')
        this.errorMessage = Selector('.error_msg')
    }
//submitLogin metod using User and Password
async submitLogin(userName, password){
    await t
       .typeText(this.userNameField, userName)
       .typeText(this.passwordField, password)
       .click(this.loginBtn)
}
// submitLoginU method use only UserName
async submitLoginU(userName){
    await t
       .typeText(this.userNameField, userName)
       .click(this.loginBtn)
}
//submitLogingP method use only  Password
async submitLoginP(password){
    await t
    .typeText(this.passwordField, password)
       .click(this.loginBtn)
}
//submitLoginE method No credentials needed only click loginBtn
async submitLoginE(){
    await t
       .click(this.loginBtn)
}


}

export default new LoginPage()