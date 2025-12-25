import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService, Todo } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todos: Todo[] = [];
  editingTodo: Todo | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => this.todos = data,
      error: (err) => console.error('Error loading todos:', err)
    });
  }

  onSubmitTodo(todoData: Omit<Todo, '_id' | 'createdAt' | 'updatedAt'>) {
    if (this.editingTodo && this.editingTodo._id) {
      this.todoService.updateTodo(this.editingTodo._id, todoData).subscribe({
        next: () => {
          this.loadTodos();
          this.editingTodo = null;
        },
        error: (err) => console.error('Error updating todo:', err)
      });
    } else {
      this.todoService.createTodo(todoData).subscribe({
        next: () => this.loadTodos(),
        error: (err) => console.error('Error creating todo:', err)
      });
    }
  }

  onEditTodo(todo: Todo) {
    this.editingTodo = todo;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onCancelEdit() {
    this.editingTodo = null;
  }

  onDeleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => this.loadTodos(),
      error: (err) => console.error('Error deleting todo:', err)
    });
  }
}
