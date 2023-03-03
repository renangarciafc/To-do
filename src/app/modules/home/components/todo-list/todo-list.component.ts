import { Component, DoCheck, OnInit } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string): void {
    this.taskList.push({task: event, checked: false});
  }

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage();
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vázia, deseja deletar?');
      if (confirm) {
        this.taskList.splice(index, 1);
      }
    }
  }

  public setLocalStorage() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
  }

}
