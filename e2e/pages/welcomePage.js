import {Selector} from 'testcafe'

class WelcomePage{
    constructor(){
    this.loginBtn = Selector('._3XsmI a[href$="/showlogin"]')
    }
}

export default new WelcomePage()
 