import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.sass']
})
export class UsuarioDetalheComponent implements OnInit {

id?: number;
usuario?: Usuario;

  constructor(private activeRoute: ActivatedRoute, private servico: UsuarioService) { }

  ngOnInit(): void {
  this.id = this.activeRoute.snapshot.paramMap.get('id') ?
  parseInt(this.activeRoute.snapshot.paramMap.get('id')!) : 0;

  this.servico.getById(this.id).subscribe({
    next: (usuarioRetorno: Usuario) => this.usuario = usuarioRetorno
  });
}

}
