import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  imports: [FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  formData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  onSubmit() {
    //console.log('Form Data Submitted:', this.formData);
    // Here you can handle the form submission, such as sending the data to an API.
    //alert('Quote request submitted successfully!');
  }
}
