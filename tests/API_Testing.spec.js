
// make an api post request to login
import { expect, test, request, page } from '@playwright/test';
import { log } from 'node:console';
const loginPayload= {userEmail:"jolly@gmail.com",userPassword:"Admin@123"};
const emptyOrderPlayload= {data:[],message:"No Orders"};
 let token;
test.beforeAll(async () => {
//    const apiContext = await request.newContext();
//    const response =  await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
//          data: loginPayload
//    })
//    const responseJson = await response.json();
//    console.log(responseJson); 
//    token = responseJson.token;
//    console.log(token);
   
   const apiContext = await request.newContext();
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{

          data: loginPayload
   })
   const loginJson= await loginResponse.json();
   const token = loginJson.token;
   console.log(token);
})
// now inject this token to next test case to see dashboard bupassing login step

test('Show dashboard without login',async ({page})=>{

//     await page.addInitScript(value=>{
//         window.localStorage.setItem('token', value);
//     }, token);
//    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//    //await page.pause();
await page.addInitScript(value=>{

    window.localStorage.setItem('token', value);
}, token);
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
})
