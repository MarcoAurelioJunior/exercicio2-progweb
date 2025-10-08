import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalhe',
  standalone: false,
  templateUrl: './noticia-detalhe.html',
  styleUrl: './noticia-detalhe.css'
})
export class NoticiaDetalhe implements OnInit {
  id: number = 0;
  urlImagem: string =
    "https://facens.br/wp-content/uploads/2021/03/logo-f.png";

  texto: string = "teste";
  constructor(private route: ActivatedRoute) { }

  //metódo executado quando o componente é inicializado
  ngOnInit(): void {
    //pega o id da rota
    this.id = this.route.snapshot.params['id'] ?? 0;
  }
  exibirMensagem(): void {
    alert("Mensagem exibida com sucesso!");
  }
}
