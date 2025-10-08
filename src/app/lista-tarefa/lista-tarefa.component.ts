import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  standalone: false,
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrl: './lista-tarefa.component.css'
})
export class ListaTarefaComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Comprar leite', concluida: false },
    { descricao: 'Estudar Angular', concluida: true },
    { descricao: 'Ir à academia', concluida: false },
    { descricao: 'Ler um livro', concluida: true },
    { descricao: 'Fazer uma caminhada', concluida: false }
  ];
  novaTarefa: string = '';

  tarefaConcluida(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ descricao: this.novaTarefa.trim(), concluida: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }


}
