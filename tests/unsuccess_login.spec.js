const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/login';

test('Unsuccessful login with invalid username', async({page}) =>{

    const login = new LoginPage(page)

    login.openLoginPage()
    login.login('Tom Smith', 'SuperSecretPassword!')
    // await page.pause()
    // await page.waitForLoadState()
    // await expect(login.msgInvalidUsername).toBeVisible()
    await expect(page).toHaveURL(/.*login/)
    await expect(login.msgInvalid).toBeVisible()
    await expect(login.msgInvalid).toContainText('Your username is invalid!')

})

test('Unsuccessful login with invalid password', async({page}) =>{

    const login = new LoginPage(page)

    login.openLoginPage()
    login.login('tomsmith', 'SomePassword')
    
    // await page.waitForLoadState()
    // await expect(login.msgInvalidPassword).toBeVisible()
    await expect(page).toHaveURL(/.*login/)
    await expect(login.msgInvalid).toBeVisible()
    await expect(login.msgInvalid).toContainText('Your password is invalid!')

})

test('Unsuccessful login with empty fields', async({page}) =>{

    const login = new LoginPage(page)

    login.openLoginPage()
    login.login('', '')

    // await page.waitForLoadState()
    // await expect(login.msgInvalidUsername).toBeVisible()
    await expect(page).toHaveURL(/.*login/)
    await expect(login.msgInvalid).toBeVisible()
    await expect(login.msgInvalid).toContainText('Your username is invalid!');
})
