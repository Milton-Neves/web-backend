import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.sass']
})
export class UsuarioListagemComponent implements OnInit {

usuarios: Usuario[] = [];
usuarioSelecionado?: Usuario;

  constructor(private servico: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.servico.getAll().subscribe({
      next: retorno => this.usuarios = retorno
    });
  }

  onRowSelect(event: MouseEvent): void{
    console.log(event);
    this.router.navigate(['/detalhe', this.usuarioSelecionado?.id]);
  }

}
