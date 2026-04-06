export class LeavePage{

    constructor(page){
        this.page=page
        //assign leave
        this.assignLeavelink = page.getByText('Assign Leave')
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.fromDate = page.locator("//label[text()='From Date']/../../descendant::input")
        this.toDate = page.locator("//label[text()='To Date']/../../descendant::input")
        this.textarea = page.locator("//label[text()='Comments']/../../div/textarea")
        this.leaveDD = page.locator("//label[text()='Leave Type']/../../descendant::i")
        this.saveBtn = page.locator("//button[normalize-space()='Assign']")
        //entitlements
        this.entitlements = page.locator("//span[normalize-space()='Entitlements']")
        this.addEntitlements = page.locator("//a[normalize-space()='Add Entitlements']")
        this.employeeEntitlements = page.locator("//a[normalize-space()='Employee Entitlements']")
        this.myEntitlements = page.locator("//a[normalize-space()='My Entitlements']")
        
    }

    async assignLeave(empName,fromDate,toDate,text,leaveType){
        await this.assignLeavelink.click()
        await this.employeeName(empName)
        await this.fromDate.fill(fromDate)
        await this.toDate.fill(toDate)
        await this.textarea.fill(text)
        await this.leaveDD.click()
        await this.page.locator(`//div[text()='${leaveType}']`).click()
        await this.saveBtn.click()
    }
}