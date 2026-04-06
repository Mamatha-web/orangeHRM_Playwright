import {test as base} from '@playwright/test'
import { LoginPage } from '../pom/login.page'
import { HomePage } from '../pom/home.page'
import jdata from '../testData/configData.json'
import { LogoutPage } from '../pom/logout.page'

export const test = base.extend({
    loginPage:async({page},use)=>{
       let loginPage = new LoginPage(page)
       await loginPage.navigate(jdata.url)
       await loginPage.login(jdata.username,jdata.password)

       await use(page)


    },

        logoutPage:async({page},use)=>{

            await use()
            let logoutPage = new LogoutPage(page)
            await logoutPage.logout()

        }




})