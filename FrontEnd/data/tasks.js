import dotenv from 'dotenv'
import faker from 'faker'
dotenv.config()

export const NUMBEROFTASKTOADD ={
    ONE_TASK:{
        TASKNUMBER: 1
    },
    TEN_TASKS:{
        TASKNUMBER: 10
    }
}

export const FAKEDATA ={
    FAKE:{
       FAKEWORD: faker.lorem.word()
    }
}

