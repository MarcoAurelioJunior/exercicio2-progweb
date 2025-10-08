import { Component } from '@angular/core';
import { AppRoutingModule } from "../app-routing-module";

@Component({
  standalone: false,
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {

  produtos = [
    { id: 1, nome: 'Notebook', descricao: 'Notebook Dell XPS 13', preco: 9999.99, emEstoque: true },
    { id: 2, nome: 'Smartphone', descricao: 'iPhone 13 Pro', preco: 7999.99, emEstoque: true },
    { id: 3, nome: 'Tablet', descricao: 'iPad Air', preco: 5999.99, emEstoque: false },
    { id: 4, nome: 'Monitor', descricao: 'Monitor LG UltraFine', preco: 2999.99, emEstoque: true },
    { id: 5, nome: 'Teclado', descricao: 'Teclado Mecânico Logitech', preco: 499.99, emEstoque: true }
  ];

  constructor() { }


}
