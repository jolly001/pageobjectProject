const {test, expect} = require('@playwright/test');
const {POManager}  = require( '../pageobjects/POManager');




test('test Valid login', async ({page})=>{
const poManager = new POManager(page);
    let username = "jolly@gmail.com"
    let password= "Admin@123";
    
    await loginPage.goTo();
    await loginPage.validLogin(username, password);   
    
    
})

test('Invalid login', async({page})=>{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    let username= "test@test.com";
    let password = "test22"
    await loginPage.goTo();
    await loginPage.inValidLogin(username,password);
    


})

test.only('validate Search', async ({page})=>{
        let username= "jolly@gmail.com";
    let password = "Admin@123"
         const poManager = new POManager(page);
          const loginPage = poManager.getLoginPage();
          const dashboardPage = poManager.getDashboardPage();
          const cartPage = poManager.getCartPage();
        await loginPage.goTo();
        await loginPage.validLogin(username, password);
        await dashboardPage.validateSearch("ZARA");
        await cartPage.navigateToCartAndVerifyItem();

})