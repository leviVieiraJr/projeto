import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import necessário
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

// Importações dos componentes
import { EstoqueComponent } from './components/estoque/estoque.component';
import { FinancasComponent } from './components/financas/financas.component';
import { HomeComponent } from './components/home/home.component';
import { EstoqueService } from './services/estoque.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    LoginComponent,
    FinancasComponent,
    HomeComponent,
    ClientesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
