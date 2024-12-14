import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
// Replace with a valid phone number
phoneNumber: string = '918081062775'; // Include country code without '+'
//phoneNumber: string = '919118918434'; // Your number
message: string = 'Hello! I would like to connect with you.';

get whatsappLink(): string {
  const encodedMessage = encodeURIComponent(this.message);
  return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
}
}
