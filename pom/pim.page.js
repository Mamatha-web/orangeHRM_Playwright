export class PimPage {
    constructor(page) {
        this.page = page;

        this.employeelistLink = page.getByText('Employee List');
        this.addEmployeeLink = page.getByText('Add Employee');
        this.reportLink = page.getByText('Reports');
        this.configurationLink = page.getByText('Configuration');

        // Add Employee
        this.firstnameTF = page.getByPlaceholder('First Name');
        this.lastnameTF = page.getByPlaceholder('Last Name');
        this.employeeID = page.locator("//label[text()='Employee Id']/../../div/input");

        this.createLoginCredentialsBtn = page.locator('//div[@class="oxd-switch-wrapper"]/label');
        this.loginUsernameTF = page.locator("//label[text()='Username']/../../div/input");
        this.loginPasswordTF = page.locator("//label[text()='Password']/../../div/input");
        this.confirmPasswordTF = page.locator("//label[text()='Confirm Password']/../../div/input");

        this.saveBtn = page.getByRole('button', { name: 'Save' }); // fixed
        //search
        this.employeeList = page.getByRole('link',{name:'Employee List'})
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.empID = page.locator("//label[text()='Employee Id']/../following-sibling::div/input")
        this.searchBtn =page.getByRole('button',{name:' Search '})
        this.checkbox = page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").last()
        this.delete = page.locator("//button[normalize-space()='Delete Selected']")
        this.confirmDelete = page.locator("//button[normalize-space()='Yes, Delete']")

        //update job
        this.jobLink = page.getByRole('link',{name:'Job'})
        this.empStatusDD = page.locator("//label[text()='Employment Status']/../following-sibling::div/descendant::i")
        this.Optionfreelancer= page.locator("//span[text()='Freelance']")
    }

    async addEmployeewithCredentials(firstname, lastname,empID,username,password) {
        await this.firstnameTF.fill(firstname);
        await this.lastnameTF.fill(lastname);
        await this.employeeID.fill(empID)
        await this.createLoginCredentialsBtn.click(); 
        await this.loginUsernameTF.fill(username);
        await this.loginPasswordTF.fill(password);
        await this.confirmPasswordTF.fill(password);

        await this.saveBtn.click();
    }

    async addEmployeewithoutCredentials(firstname, lastname,empID) {
        await this.firstnameTF.fill(firstname);
        await this.lastnameTF.fill(lastname);
        await this.employeeID.fill(empID)
        await this.saveBtn.click();
    }

    async getEmployeeID() {
        await this.employeeID2.waitFor(); // ensure visible
        return await this.employeeID2.inputValue();
    }

    async searchEmployee(empID){
        await this.employeelistLink.click()
        await this.empID.fill(empID)
        await this.searchBtn.click()
    }

        async deleteEmployee(empID){
        await this.employeelistLink.click()
        await this.empID.fill(empID)
        await this.searchBtn.click()
        await this.checkbox.click()
        await this.delete.click()
        await this.confirmDelete.click()
    }

        async updateEmployeeJobasFreelancer(){
            await this.jobLink.click()
            await this.empStatusDD.click()
            await this.Optionfreelancer.click()
            await this.saveBtn.click()


        }




}