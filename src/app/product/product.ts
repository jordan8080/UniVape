export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: number;

  constructor(id: number, name: string, price: number, description: string, image: string, category: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
  }
}
