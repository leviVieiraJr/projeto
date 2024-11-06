// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login() {
    // Aqui você pode definir a lógica de autenticação (exemplo: salvar token no localStorage)
    this.isAuthenticated = true;
    localStorage.setItem('isLoggedIn', 'true'); // Simulação de login
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn'); // Remove o estado de login
    this.router.navigate(['/login']); // Redireciona para a página de login
  }

  isLoggedIn(): boolean {
    // Verifica o estado de login
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
