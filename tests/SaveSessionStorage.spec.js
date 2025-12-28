
// in this we are saving session storage and using it in next test case
import { expect, test, request } from '@playwright/test';
let webConntext;
const fakePayloadOrder = {data:[],message:"No Orders"};
test.beforeAll(async ({browser}) => {
//     const context= await browser.newContext();
//    const page= await context.newPage();
//    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//    await page.locator("#userEmail").fill("jolly@gmail.com");
//    await page.locator("#userPassword").fill("Admin@123");
//    await page.locator("#login").click();
//    await page.waitForLoadState('networkidle');
//    await context.storageState({path: 'state.json'});
//    webConntext= await browser.newContext({storageState: 'state.json'});

const context =await browser.newContext();
const page= await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator("#userEmail").fill("jolly@gmail.com");
   await page.locator("#userPassword").fill("Admin@123");
   await page.locator("#login").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({path: 'state.json'});
   webConntext = await browser.newContext({storageState:'state.json'});

   

})
// now pass this session in the below test case.
test('Show dashboard without login',async ()=>{

//    const page= await webConntext.newPage();
//    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      const page = await webConntext.newPage();
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

   

})

test('Mocking the getorder', async ()=>{
        //const page = webConntext.newPage();

        const page= await webConntext.newPage();
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6945090332ed8658713e64a1',
            async route=>
                {
                    const response = await page.request.fetch(route.request());
                    let body = JSON.stringify(fakePayloadOrder);
                    route.fulfill({

                        response,
                        body,
                    }
                        
                    )


        }
    
    )
    await page.locator("[routerlink='/dashboard/myorders']").click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6945090332ed8658713e64a1');
    //await page.waitForLoadState('networkidle');
    await page.pause();
 
    

})





