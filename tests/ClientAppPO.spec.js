const {test, expect} = require('@playwright/test');
const {POManager}  = require( '../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppPOTestData.json')));


for (const data of dataset){

test.skip(`test Valid login ${data.productName}`, async ({page})=>{
const poManager = new POManager(page);
    let username = "jolly@gmail.com"
    let password= "Admin@123";
    
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);   
    
    
})

test.skip(`Invalid login ${data.productName}`, async({page})=>{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    let username= "test@test.com";
    let password = "test22"
    await loginPage.goTo();
    await loginPage.inValidLogin(data.username,data.password);
    


})

test.only(`validate Search ${data.productName}`, async ({page})=>{
        let username= "jolly@gmail.com";
    let password = "Admin@123"
         const poManager = new POManager(page);
          const loginPage = poManager.getLoginPage();
          const dashboardPage = poManager.getDashboardPage();
          const cartPage = poManager.getCartPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);
        await dashboardPage.validateSearch(data.productName);
        await cartPage.navigateToCartAndVerifyItem();

})}