export class LoginPage {

    constructor(page) {

        this.page = page
        this.inputUsername = page.getByLabel('Username')
        this.inputPassword = page.getByLabel('Password')
        this.btnLogin = page.getByRole('button', { name: 'Login' })
        this.msgInvalid = page.locator('#flash') 
        // this.msgInvalidUsername = page.getByText('Your username is invalid!')
        // this.msgInvalidPassword = page.getByText('Your password is invalid!')

    }

    async openLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password) {

        await this.inputUsername.fill(username)
        await this.inputPassword.fill(password)
        await this.btnLogin.click()
    }
}