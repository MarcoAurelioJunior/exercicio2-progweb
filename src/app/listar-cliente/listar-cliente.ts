import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-listar-cliente',
  standalone: false,
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css'
})
export class ListarCliente {
<<<<<<< HEAD

  nome: string = '';
  clienteSelecionado: Cliente | null = null;
=======
  clienteSelecionado: Cliente | null = null;
  nome: string = '';
>>>>>>> b09177cd02431abb38bcdbd3dd31a2eb7c045bca
  mostraTabela: boolean = true;
  clientes: Cliente[] = [
    { id: 1, nome: 'Ana', cidade: 'São Paulo' },
    { id: 2, nome: 'Bruno', cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Carla', cidade: 'Belo Horizonte' }
  ];

  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
        },
        (reason) => {
        },
      );
  }
}
