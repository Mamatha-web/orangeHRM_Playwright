export class LoginPage{

    constructor(page){
        this.page = page
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.submit = page.getByRole('button',{name:' Login '})
        this.errorMsg = page.locator("//p[text()='Invalid credentials']")
    }

    async  navigate(url){

       await this.page.goto(url)
    }

    async login(username,password){

        await  this.username.fill(username)
        await this.password.fill(password)
        await this.submit.click()
    }

}
