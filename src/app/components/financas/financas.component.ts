import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent {
  financasForm: FormGroup;
  financasResultados: string[] = [];

  constructor(private fb: FormBuilder) {
    this.financasForm = this.fb.group({
      dataInicio: [''],
      dataFim: [''],
      produto: ['']
    });
  }

  onSubmit() {
    const { dataInicio, dataFim, produto } = this.financasForm.value;
    // Aqui, você pode adicionar a lógica de pesquisa
    this.financasResultados = [`Resultado para produto: ${produto}, entre ${dataInicio} e ${dataFim}`];
  }
}
