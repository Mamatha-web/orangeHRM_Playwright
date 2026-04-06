import {test,expect} from '@playwright/test'
import { LoginPage } from '../pom/login.page.js'
import jData from '../testData/configData.json'
import {HomePage} from '../pom/home.page.js' 
import {PimPage} from '../pom/pim.page.js'
import {LogoutPage} from '../pom/logout.page.js'
import e from '../testData/addEmployee.json'
import { generateRandomNumber } from '../genericUtility/jsUtility.js'

test('loginAsUser', async({page})=>{

    //login
     let loginPage = new LoginPage(page)   
    await loginPage.navigate(jData.url)
    await loginPage.login(jData.username,jData.password)
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //add employee
    let homePage = new HomePage(page)
    let pimPage = new PimPage(page)
    let ran = generateRandomNumber()
    let firstname = e.firstname
    let lastname = e.lastname+ran
    let username = firstname+ran
    let password = e.password+ran
    let empID = e.empID+ran

    await homePage.pimLink.click()
    await pimPage.addEmployeeLink.click()
    await pimPage.addEmployeewithCredentials(firstname,lastname,empID,username,password)
    console.log(firstname,lastname,empID,username,password)
    await expect(page.getByText('Successfully Saved')).toBeVisible()


    //logout
    await new LogoutPage(page).logout()

    //login as user
    await loginPage.navigate(jData.url)
    await loginPage.login(username,password)
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    
})