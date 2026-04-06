import {test,expect} from '@playwright/test'
import { LoginPage } from '../pom/login.page'
import jData from '../testData/configData.json'

test('loginToApp', async({page})=>{
    let login = new LoginPage(page)
    await login.navigate(jData.url)
    await login.login(jData.username,jData.password)
    await expect(page.url).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
})