const {test, expect} = require('@playwright/test');
const {POManager}  = require( '../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppPOTestData.json')));




test('test Valid login', async ({page})=>{
const poManager = new POManager(page);
    let username = "jolly@gmail.com"
    let password= "Admin@123";
    
    await loginPage.goTo();
    await loginPage.validLogin(dataset.username, dataset.password);   
    
    
})

test('Invalid login', async({page})=>{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    let username= "test@test.com";
    let password = "test22"
    await loginPage.goTo();
    await loginPage.inValidLogin(dataset.username,dataset.password);
    


})

test.only('validate Search', async ({page})=>{
        let username= "jolly@gmail.com";
    let password = "Admin@123"
         const poManager = new POManager(page);
          const loginPage = poManager.getLoginPage();
          const dashboardPage = poManager.getDashboardPage();
          const cartPage = poManager.getCartPage();
        await loginPage.goTo();
        await loginPage.validLogin(dataset.username, dataset.password);
        await dashboardPage.validateSearch(dataset.productName);
        await cartPage.navigateToCartAndVerifyItem();

})