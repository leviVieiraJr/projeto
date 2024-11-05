// src/app/components/clientes/clientes.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  novoCliente: Cliente = new Cliente(0, '', '', '', '', '');
  pesquisa: string = '';

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

  cadastrarCliente() {
    if (this.novoCliente.nome && this.novoCliente.email && this.novoCliente.telefone && this.novoCliente.cpf && this.novoCliente.endereco) {
      this.clientesService.adicionarCliente({...this.novoCliente});
      this.novoCliente = new Cliente(0, '', '', '', '', ''); // Limpa o formulário
      this.clientes = this.clientesService.getClientes();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  buscarClientes() {
    if (this.pesquisa) {
      return this.clientesService.buscarClientePorNome(this.pesquisa);
    }
    return this.clientes;
  }
}
