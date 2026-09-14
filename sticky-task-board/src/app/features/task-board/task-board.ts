import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Task } from '../../models/task';

@Component({
  imports: [],
  selector: 'app-task-board',
  styleUrl: './task-board.css',
  templateUrl: './task-board.html',
})
export class TaskBoard {
  private taskService = inject(TaskService);

  tasks = toSignal(this.taskService.getTasks(), { initialValue: [] as Task[] });
 
  // derived state — recalculates itself whenever tasks() changes
  openCount = computed(() => this.tasks().filter(t => !t.done).length);
  totalCount = computed(() => this.tasks().length);

  async remove(id: string) {
    if (!confirm('Delete this task?')) return;
    await this.taskService.deleteTask(id);
  }




}
