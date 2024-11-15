import { Component } from '@angular/core';
import {Product} from './product';
import {NgFor, NgForOf} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [
    NgFor
  ],
  standalone: true
})
export class ProductComponent {
  title = 'Our Products';

  products: Product[] = [
    { id: 1, name: 'Product A', price: 29.99, description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: 49.99, description: 'Description for Product B' },
    { id: 3, name: 'Product C', price: 19.99, description: 'Description for Product C' }
  ];

  buyProduct(product: any): void {
    alert(`You have selected: ${product.name}`);
  }

}

