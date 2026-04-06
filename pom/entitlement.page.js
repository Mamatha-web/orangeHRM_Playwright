export class EntitlementPage{

    constructor(page){
        this.page = page
        this.employeeName = page.getByPlaceholder("Type for hints...")
        this.leaveTypeDD = page.getByText('-- Select --').first()
        this.entitlementTF = page.locator("//label[text()='Entitlement']/../../div/input")
        this.saveBtn = page.locator("//button[normalize-space()='Save' ]")
        this.confirmBtn = page.locator("//button[normalize-space()='Confirm']")
    }

    async addEntitlement(empName,leaveDD,entitlementDays,){
        await this.employeeName.fill(empName)
        const employeeOption =  await this.page.getByRole('option', { name: empName })
         await employeeOption.waitFor({ state: 'visible' }) 
         await employeeOption.click()
        await this.leaveTypeDD.click()
        await this.page.getByRole('option', { name: leaveDD }).click()
        await this.entitlementTF.fill(entitlementDays)
        await this.saveBtn.click()
        await this.confirmBtn.click()

    }
}