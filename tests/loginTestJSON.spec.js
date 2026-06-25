const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')
const testdata = require('../testdata/loginData.json')

test.only('login user with valid credentials using JSON', async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goTo("/")
    //console.log(process.env.USER_NAME,process.env.PASSWORD,process.env.NAMEOFTHEUSER)
    await loginPage.enterCredntails(testdata.username,testdata.password,testdata.nameofuser)

})