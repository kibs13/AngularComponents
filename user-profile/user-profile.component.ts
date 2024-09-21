import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']  // Optional if you want to include styles
})
export class UserProfileComponent {
  user = {
    name: 'Kiven',
    email: 'Kiven@gmel.com',
    bio: 'Comedy Developer'
  };

  updateUser() {
    alert('Profile updated successfully!');
    // You can add logic here to handle the updated user data
  }
}


