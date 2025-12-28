class LoginPage {

    constructor(page){
        this.page = page;
        this.loginBtn = page.locator("#login");
        this.emailInput = page.locator("input[type='email']");
        this.passwordInput = page.locator("input[type='password']");
        this.loginErrorMessage = page.locator("//div[contains(text(),'Incorrect email or password')]");

        


    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    
    async validLogin(username, password){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async inValidLogin(username, password){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
       const bool=  await this.loginErrorMessage.isVisible();
       console.log(await bool);

    }
    
}
module.exports = {LoginPage};