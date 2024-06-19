import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss',
    imports: [TaskComponent]
})
export class TaskListComponent {

}
