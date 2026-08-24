"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type soldType = {name: string, price: number};
class ShopManagement {
    name;
    location;
    sold = [];
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    buy(item, price, qty) {
        this.sold.push({ item, price, qty });
    }
}
const sultanDine = new ShopManagement("Sultan Dine", "Mirpur 12");
sultanDine.buy("kacchi", 200, 1);
console.log(sultanDine);
//# sourceMappingURL=file2.js.map