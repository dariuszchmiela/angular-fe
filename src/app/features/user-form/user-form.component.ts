import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importujemy CommonModule
import { UserService } from '@/app/core/services/user.service';
import { User } from '@/app/core/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UserFormComponent {
  user: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.addUser(this.user).subscribe(() => {
      console.log('User added');
      this.user = { name: '', email: '' };
    });
  }
}
