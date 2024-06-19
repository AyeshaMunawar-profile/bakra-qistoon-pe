import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
    imports: [UserComponent]
})
export class UserListComponent {

}
