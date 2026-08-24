// type soldType = {name: string, price: number};
class ShopManagement {
  name: string;
  location: string;
  sold: any = [];

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  buy(item: string, price: number, qty: number) {
    this.sold.push({ item, price, qty });
  }
}

const sultanDine = new ShopManagement("Sultan Dine", "Mirpur 12");

sultanDine.buy("kacchi", 200, 1);

console.log(sultanDine);
