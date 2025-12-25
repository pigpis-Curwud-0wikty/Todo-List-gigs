import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../services/todo.service';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    @Input() todos: Todo[] = [];
    @Output() editTodo = new EventEmitter<Todo>();
    @Output() deleteTodo = new EventEmitter<string>();

    onEdit(todo: Todo) {
        this.editTodo.emit(todo);
    }

    onDelete(id: string | undefined) {
        if (id && confirm('Are you sure you want to delete this todo?')) {
            this.deleteTodo.emit(id);
        }
    }

    formatDate(date: string | undefined): string {
        if (!date) return '';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}
