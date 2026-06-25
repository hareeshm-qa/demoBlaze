const {expect} = require('@playwright/test')
class LoginPage {
    constructor(page){
        this.page = page;
        this.logInLink = this.page.locator('#login2')
        this.usernameFiled = this.page.locator('#loginusername')
        this.passwordField = this.page.locator('#loginpassword')
        this.logInButton = this.page.getByRole("button", {name : 'Log in'})
        this.nameOfUser = this.page.locator('#nameofuser')
    }

    async goTo(url){
        await this.page.goto(url)
    }

    async enterCredntails(username,password,nameofuser){
        await this.logInLink.click()
        await this.usernameFiled.fill(username)
        await this.passwordField.fill(password)
        await this.logInButton.click()
        await expect(this.nameOfUser).toBeVisible(nameofuser)
    }

}

module.exports = {LoginPage}