import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string; // Utilizaremos uma string para simplificar, mas poderia ser um objeto Date
}

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent {
  transactions: Transaction[] = [];
  transactionForm: FormGroup;
  editingTransaction: Transaction | null = null;

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      date: ['', Validators.required]
    });
  }

  addTransaction(): void {
    if (this.transactionForm.valid) {
      const newTransaction: Transaction = {
        id: this.transactions.length + 1,
        ...this.transactionForm.value
      };
      this.transactions.push(newTransaction);
      this.resetForm();
    }
  }

  editTransaction(transaction: Transaction): void {
    this.editingTransaction = transaction;
    this.transactionForm.setValue({
      description: transaction.description,
      amount: transaction.amount,
      date: transaction.date
    });
  }

  updateTransaction(): void {
    if (this.editingTransaction && this.transactionForm.valid) {
      const index = this.transactions.findIndex(t => t.id === this.editingTransaction!.id);
      if (index !== -1) {
        this.transactions[index] = { id: this.editingTransaction.id, ...this.transactionForm.value };
        this.resetForm();
        this.editingTransaction = null;
      }
    }
  }

  deleteTransaction(transaction: Transaction): void {
    this.transactions = this.transactions.filter(t => t.id !== transaction.id);
  }

  resetForm(): void {
    this.transactionForm.reset();
    this.editingTransaction = null;
  }
}
