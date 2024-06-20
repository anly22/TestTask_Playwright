const { test, expect } = require("@playwright/test")
import { LoginPage } from '../pages/login'
import { SecurePage } from '../pages/secure'

test('Successful login with valid data', async ({page}) =>{

    const login = new LoginPage(page)
    const secure = new SecurePage(page)

    login.openLoginPage()
    login.login('tomsmith', 'SuperSecretPassword!')

    await page.waitForURL('**/secure')
    await expect(secure.msgSuccsessLogin).toBeVisible()
    
})
