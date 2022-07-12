import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from 'src/models/tarefas.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tarefas: Tarefa[] = [];
  public titulo: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.carregar();
  }

  adicionar() {
    const title = this.form.controls['title'].value;
    const id = this.tarefas.length + 1;
    this.tarefas.push(new Tarefa(id, title, false));
    this.salvar();
    this.limpar();
  }

  remover(tarefa: Tarefa) {
    const index = this.tarefas.indexOf(tarefa);
    if (index != -1) {
      this.tarefas.splice(index, 1);
    }
    this.salvar();
  }

  limpar() {
    this.form.reset();
  }

  marcarComoFeito(tarefa: Tarefa) {
    tarefa.feito = true;
    this.salvar();
  }

  marcarComoNaoFeito(tarefa: Tarefa) {
    tarefa.feito = false;
    this.salvar();
  }

  salvar() {
    const dados = JSON.stringify(this.tarefas);
    localStorage.setItem('tarefas', dados);
  }

  carregar() {
    const dados = localStorage.getItem('tarefas');
    if (dados) {
      this.tarefas = JSON.parse(dados);
    } else {
      this.tarefas = [];
    }
  }
}
