import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { Noticia } from './noticia/noticia';
import { NoticiaDetalhe } from './noticia-detalhe/noticia-detalhe';
import { TelaPai } from './tela-pai/tela-pai';
import { TelaFilho1 } from './tela-filho1/tela-filho1';
import { TelaFilho2 } from './tela-filho2/tela-filho2';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sobre', component: SobreComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent},
  // { path: 'calculadora', component: Calculadora },
  // { path: 'listar-clientes', component: ListarCliente },
  // { path: 'listar-tarefas', component: ListaTarefaComponent },
  // { path: 'noticia-detalhe/:id', component: NoticiaDetalhe },
  // {
  //   path: 'tela-pai', component: TelaPai, children: [
  //     { path: 'tela-filho1', component: TelaFilho1 },
  //     { path: 'tela-filho2', component: TelaFilho2 }
  //   ]
  // },
  // { path: 'calcular-media', component: CalcularMedia },
  { path: '**', component: PaginaNaoEncontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
