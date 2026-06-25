const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')

test('login user with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goTo("/")
   
    await loginPage.enterCredntails(process.env.USER_NAME,process.env.PASSWORD,process.env.NAMEOFTHEUSER)

})