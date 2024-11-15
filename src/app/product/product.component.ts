import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true
})
export class ProductComponent {
  title = 'Our Products';

  // Liste des produits
  products = [
    { id: 1, name: 'Product A', price: 29.99, description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: 49.99, description: 'Description for Product B' },
    { id: 3, name: 'Product C', price: 19.99, description: 'Description for Product C' }
  ];

  buyProduct(product: any): void {
    alert(`You have selected: ${product.name}`);
  }

}

