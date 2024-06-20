export class SecurePage {
    constructor(page) {

        this.page = page
        this.msgSuccsessLogin = page.getByText('You logged into a secure area!')
        this.btnLogout = page.locator('#content > div > a > i')
        
    }
}