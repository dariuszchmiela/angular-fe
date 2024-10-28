import { Component } from '@angular/core';
import { UserListComponent } from './features/users/user-list/user-list.component';
import {UserFormComponent} from '@/app/features/user-form/user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [UserFormComponent, UserListComponent]
})
export class AppComponent {
  title = 'angular-fe';
}
