import { Component, EventEmitter, Input, Output, signal, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../services/todo.service';

@Component({
    selector: 'app-todo-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './todo-form.component.html',
    styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnChanges {
    @Input() editingTodo: Todo | null = null;
    @Output() submitTodo = new EventEmitter<Omit<Todo, '_id' | 'createdAt' | 'updatedAt'>>();
    @Output() cancelEdit = new EventEmitter<void>();

    todoForm: FormGroup;
    isEditing = signal(false);

    constructor(private fb: FormBuilder) {
        this.todoForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['editingTodo']) {
            if (this.editingTodo) {
                this.isEditing.set(true);
                this.todoForm.patchValue({
                    title: this.editingTodo.title,
                    description: this.editingTodo.description
                });
            } else {
                this.isEditing.set(false);
            }
        }
    }

    onSubmit() {
        if (this.todoForm.valid) {
            this.submitTodo.emit(this.todoForm.value);
            this.todoForm.reset();
            this.isEditing.set(false);
        }
    }

    onCancel() {
        this.todoForm.reset();
        this.isEditing.set(false);
        this.cancelEdit.emit();
    }

    get title() { return this.todoForm.get('title'); }
    get description() { return this.todoForm.get('description'); }
}
