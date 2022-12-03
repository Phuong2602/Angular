export class Product {
  name: string = '';
  description: string = '';
  price: number = 0;

  public toString = () : string => {
    return `Product ${this.name}, ${this.description}, $ ${this.price}`;
  }

}
