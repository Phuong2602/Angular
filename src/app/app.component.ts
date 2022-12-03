import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is content of title';
  username = 'tuan';

  name : string = '';
  description : string = '';
  price : number = 0;

  product1: Product = {
    name: 'iPhone 14',
    description: 'New',
    price : 2000
  };

  product2: Product = {
    name: 'iPhone 15',
    description: 'New',
    price : 2000
  };

  product3: Product = {
    name: 'iPhone 16',
    description: 'New',
    price : 2000
  };

  products : Product[] = [
    this.product1,
    this.product2,
    this.product3
  ]

  addProduct() {
    //to do?
    const newProduct : Product = {
      name: this.name,
      description : this.description,
      price : this.price
    }

    this.products.push( newProduct );
  }

}
