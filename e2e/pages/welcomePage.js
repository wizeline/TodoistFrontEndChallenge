import {Selector} from 'testcafe'

class WelcomePage{
    constructor(){
        this.loginBtn = Selector('._3XsmI>li:first-of-type')
    }
}

export default new WelcomePage()
 