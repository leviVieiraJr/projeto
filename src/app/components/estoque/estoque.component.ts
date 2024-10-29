import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  estoqueForm: FormGroup;
  estoqueResultados: string[] = [];

  constructor(private fb: FormBuilder) {
    this.estoqueForm = this.fb.group({
      nomeProduto: [''],
      categoria: [''],
      quantidadeMinima: ['']
    });
  }

  onSubmit() {
    const { nomeProduto, categoria, quantidadeMinima } = this.estoqueForm.value;
    // Lógica de pesquisa e filtragem para o estoque
    this.estoqueResultados = [`Produto: ${nomeProduto}, Categoria: ${categoria}, Quantidade mínima: ${quantidadeMinima}`];
  }
}
  