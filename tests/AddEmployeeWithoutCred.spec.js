import {expect} from '@playwright/test'
import {test} from '../customFixtures/authPage.js'
import {HomePage} from '../pom/home.page.js' 
import {PimPage} from '../pom/pim.page.js'
import empData from '../testData/addEmployee.json'

test('AddNewEmployeewithoutCred', async({page,loginPage})=>{


        //login to application
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //add Employee
    let homePage = new HomePage(loginPage)
    let pimPage = new PimPage(loginPage)
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
    // assertions
    await expect(pimPage.firstnameTF).toHaveValue(firstname)
    await expect(pimPage.lastnameTF).toHaveValue(lastname)
    //await expect(pimPage.saveBtn).toBeVisible()
})