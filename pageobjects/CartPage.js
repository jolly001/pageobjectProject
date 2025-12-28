class CartPage{

    constructor(page){
        this.page = page;
        this.cartBtn = page.locator("[routerlink='/dashboard/cart']");
        this.cartItem = page.locator(".cartSection h3");
    }

    async navigateToCartAndVerifyItem(){
        await this.cartBtn.click();
           let name = await this.cartItem.first().textContent();
           if(name.includes("ZARA")){
                console.log(name);
           }
    }

}

module.exports = {CartPage};