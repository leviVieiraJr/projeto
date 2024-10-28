import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { LoginComponent } from './components/login/login.component';
import { FinancasComponent } from './components/financas/financas.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Usa o layout para renderizar as páginas
    children: [
      { path: 'home', component: HomeComponent }, // Rota inicial
      { path: 'estoque', component: EstoqueComponent },
      { path: 'financas', component: FinancasComponent },
      { path: 'login', component: LoginComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
