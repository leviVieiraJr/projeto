// src/app/services/estoque.service.ts
import { Injectable } from '@angular/core';

interface Produto {
  nomeProduto: string;
  quantidade: number;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private produtos: Produto[] = [
    { nomeProduto: 'Prego', quantidade: 100, valor: 1.5 },
    { nomeProduto: 'Tijolo', quantidade: 50, valor: 0.8 }
  ];

  // Método para retornar todos os produtos do estoque
  obterProdutos(): Produto[] {
    return this.produtos;
  }

  buscarProdutoPorNome(nome: string): Produto | undefined {
    return this.produtos.find(produto => produto.nomeProduto === nome);
  }

  atualizarQuantidadePorNome(nome: string, quantidade: number) {
    const produto = this.buscarProdutoPorNome(nome);
    if (produto) {
      produto.quantidade += quantidade;
    }
  }
}
