import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../../Services/Email/email.service';

@Component({
  selector: 'app-faq',
  imports: [FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  formData = {
    name: '',
    email: '',
    service: '',
    message: '',
  };

  constructor(private emailService: EmailService) {}

  onSubmit() {
    // Transform form data into the required format
    // const emailData = {
    //   ToEmail: this.formData.email, // Replace with a dynamic or hardcoded recipient email
    //   Subject: `Service Request from ${this.formData.name}`,
    //   Body: `
    //   Name: ${this.formData.name}
    //   Email: ${this.formData.email}
    //   Service: ${this.formData.service}
    //   Message: ${this.formData.message}
    // `,
    // };

    // this.emailService.sendEmail(emailData).subscribe(
    //   (response) => {
    //     //alert('Email sent successfully!');
    //     console.log(response);
    //   },
    //   (error) => {
    //     //alert('Failed to send email. Please try again.');
    //     console.error(error);
    //   }
    // );
  }
}
