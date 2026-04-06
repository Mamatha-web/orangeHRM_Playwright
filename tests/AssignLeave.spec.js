import {test,expect} from '@playwright/test'
import { HomePage } from '../pom/home.page.js'
import { PimPage } from '../pom/pim.page.js'
import { LoginPage } from '../pom/login.page.js'
import { LeavePage } from '../pom/leave.page.js'
import { EntitlementPage } from '../pom/entitlement.page.js'
import empData from '../testData/addEmployee.json'
import jData from '../testData/configData.json'
import entitlementData from '../testData/addEntitlement.json'
import assignLeaveData from '../testData/assignLeave.json'

test('AddEntitlementAndAssignLeave', async({page})=>{
    

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

    //add entitlement
    let leavePage = new LeavePage(page)
    let entitlementPage = new EntitlementPage(page)
    await homePage.leaveLink.click()
    await page.reload()
    let fullName = `${firstname} ${lastname}`
    console.log(fullName)
    await leavePage.entitlements.click()
    await leavePage.addEntitlements.click()
    await entitlementPage.addEntitlement(fullName,entitlementData.leaveType,entitlementData.entitlementDays)
    await expect(page.getByText('Successfully Saved')).toBeVisible()


    //assign leave
    await leavePage.assignLeavelink.click()
    await leavePage.assignLeave(fullName,assignLeaveData.fromDate,assignLeaveData.toDate,assignLeaveData.leaveType,assignLeaveData.text)
    await expect(page.getByText('Successfully Saved')).toBeVisible()

})