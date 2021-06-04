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
  }
  
  adicionar() {
    const title = this.form.controls['title'].value;
    const id = this.tarefas.length + 1;
    this.tarefas.push(new Tarefa(id, title, false));
    this.limpar();
  }

  remover(tarefa: Tarefa) {
    const index = this.tarefas.indexOf(tarefa);
    if (index != -1) {
      this.tarefas.splice(index, 1);
    }
  }

  limpar() {
    this.form.reset();
  }

  marcarComoFeito(tarefa: Tarefa) {
    tarefa.feito = true;

  }

  marcarComoNaoFeito(tarefa: Tarefa) {
    tarefa.feito = false;
  }
}
