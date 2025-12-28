const {expect} = require('@playwright/test');
class DashboardPage {

    constructor(page){
        this.page= page;
        this.searchTextInputBox = page.locator("(//*[@name= 'search'])[2]");
        this.searchedItemsList = page.locator(".card-body b");
        this.firstProductAddToCart = page.locator("(//*[contains(text(),'Add To Cart')])[1]");
        


    }


        async validateSearch(searchItem){
            await this.searchTextInputBox.fill("ZARA");
            await this.page.keyboard.press('Enter');
           // await this.searchedItemsList.first().waitFor();
            let text = await this.searchedItemsList.first().textContent();
                  
            console.log(text);
            if(text.includes("ZARA")){
                await this.firstProductAddToCart.click();
            }

        }


}
module.exports= {DashboardPage};