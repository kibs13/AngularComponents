import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']  // Optional for styles
})
export class ContactFormComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert('Thank you for your message!');
      // Here you can add logic to send the form data to a server
      console.log('Form submitted:', this.contact);
      this.resetForm();
    } else {
      alert('Please fill out all fields.');
    }
  }

  resetForm() {
    this.contact = { name: '', email: '', message: '' };
  }
}

