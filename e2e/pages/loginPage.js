import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('.input_email')
        this.passwordField = Selector('.form_field_control')
        this.loginBtn  = Selector('.submit_btn')
        this.errorMessage = Selector('.error_msg')
    }
}

export default new LoginPage()