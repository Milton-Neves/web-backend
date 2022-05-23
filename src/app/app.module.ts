import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';

import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListagemComponent,
    UsuarioDetalheComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
