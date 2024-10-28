import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  products: Product[] = [];
  productForm: FormGroup;
  editingProduct: Product | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.products.length + 1,
        ...this.productForm.value
      };
      this.products.push(newProduct);
      this.resetForm();
    }
  }

  editProduct(product: Product): void {
    this.editingProduct = product;
    this.productForm.setValue({
      name: product.name,
      quantity: product.quantity,
      price: product.price
    });
  }

  updateProduct(): void {
    if (this.editingProduct && this.productForm.valid) {
      const index = this.products.findIndex(p => p.id === this.editingProduct!.id);
      if (index !== -1) {
        this.products[index] = { id: this.editingProduct.id, ...this.productForm.value };
        this.resetForm();
        this.editingProduct = null;
      }
    }
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  resetForm(): void {
    this.productForm.reset();
    this.editingProduct = null;
  }
}
