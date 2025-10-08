import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {

constructor(private route: ActivatedRoute) {}

  id!: string;
  produto:any
  produtos = [
    { id: 1, nome: 'Notebook', descricao: 'Notebook Dell XPS 13', preco: 9999.99, emEstoque: true },
    { id: 2, nome: 'Smartphone', descricao: 'iPhone 13 Pro', preco: 7999.99, emEstoque: true },
    { id: 3, nome: 'Tablet', descricao: 'iPad Air', preco: 5999.99, emEstoque: false },
    { id: 4, nome: 'Monitor', descricao: 'Monitor LG UltraFine', preco: 2999.99, emEstoque: true },
    { id: 5, nome: 'Teclado', descricao: 'Teclado Mecânico Logitech', preco: 499.99, emEstoque: true }
  ];

  ngOnInit() {
    // Forma 1: pegar o valor uma única vez (snapshot)
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Forma 2 (recomendada): ouvir mudanças na rota (caso o id mude sem recarregar o componente)
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      console.log('ID recebido:', this.id);

      if (this.id) {
        // Percorre o array e encontra o produto com o mesmo id
        this.produto = this.produtos.find(p => p.id === Number(this.id));
      }

    });
  }

}
