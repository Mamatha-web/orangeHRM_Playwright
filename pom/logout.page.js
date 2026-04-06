export class LogoutPage{
    constructor(page){
        this.page = page
        this.openProfileMenu = page.locator("//span[@class='oxd-userdropdown-tab']/i")
        this.logoutLink = page.getByRole('menuitem', {name:"Logout"})

    }

    async logout(){
        await this.openProfileMenu.click()
        await this.logoutLink.click()
    }

}