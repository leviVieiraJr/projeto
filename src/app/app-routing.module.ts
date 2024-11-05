import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinancasComponent } from './components/financas/financas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'financas', component: FinancasComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Note o uso de path e pathMatch corretamente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
