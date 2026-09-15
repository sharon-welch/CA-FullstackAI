import { Component, computed, effect, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { TaskService } from '../../services/task-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  selector: 'app-task-edit',
  styleUrl: './task-edit.css',
  templateUrl: './task-edit.html',
})

export class TaskEdit {
  taskService = inject(TaskService);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private router = inject(Router);
 
  private params = toSignal(this.route.paramMap);
  taskId = computed(() => this.params()?.get('id') ?? '');

  private task$ = toObservable(this.taskId).pipe(
    filter((id): id is string => id !== ''),
    switchMap(id => this.taskService.getTask(id)),
  );
  
  task = toSignal(this.task$);

  taskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    details: [''],
    color: ['yellow'],
  });
 
  constructor() {
    // form with values filled in 
    // effect waits for data from signal and then fills the form 
    effect(() => {
      const t = this.task();
      if (!t) return;
      this.taskForm.patchValue({
        title: t.title,
        details: t.details,
        color: t.color,
      });
    });
  }

  async onSubmit() {
    if (this.taskForm.invalid) return;
    await this.taskService.updateTask(this.taskId(), this.taskForm.getRawValue());
    this.router.navigate(['/tasks']);
  }

}


