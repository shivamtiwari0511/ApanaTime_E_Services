import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Replace with a valid phone number
  phoneNumber: string = '918081062775'; // Include country code without '+'
  //phoneNumber: string = '919118918434'; // Your number
  message: string = 'Hello! I would like to connect with you.';

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
