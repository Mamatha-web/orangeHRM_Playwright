import {test,expect} from '@playwright/test'
import { LoginPage } from '../pom/login.page.js'
import jData from '../testData/configData.json'
import {HomePage} from '../pom/home.page.js' 
import {PimPage} from '../pom/pim.page.js'
import empData from '../testData/addEmployee.json'

test('searchEmployee', async({page})=>{

        //login to application
    let loginPage = new LoginPage(page)
    await loginPage.navigate(jData.url)
    await loginPage.login(jData.username,jData.password)
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //add Employee
    let homePage = new HomePage(page)
    let pimPage = new PimPage(page)
    let ran = Math.floor(Math.random()*100)
    let firstname = empData.firstname
    let lastname = empData.lastname+ran
    let empID = empData.empID+ran

    await homePage.pimLink.click()
    await pimPage.addEmployeeLink.click()
    await pimPage.addEmployeewithoutCredentials(firstname,lastname,empID)
    await page.waitForLoadState('domcontentloaded')
    await expect(page.getByText('Successfully Saved')).toBeVisible()
    console.log(firstname,lastname,empID)



    // search employee
    await pimPage.searchEmployee(empID)
    await expect(page.getByText(empID)).toBeVisible()
})