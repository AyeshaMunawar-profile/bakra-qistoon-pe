import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../task-management/header/header.component";
import { UserListComponent } from '../task-management/user-list/user-list/user-list.component';
import { TaskListComponent } from '../task-management/tasks-list/task-list/task-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, UserListComponent, TaskListComponent]
})
export class AppComponent {
  title = 'bakra-qiston-pe';
}
