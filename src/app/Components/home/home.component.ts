import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FactsComponent } from "./facts/facts.component";
import { FeaturesComponent } from "./features/features.component";
import { ServicesComponent } from "./services/services.component";
import { FaqComponent } from "./faq/faq.component";
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FactsComponent, FeaturesComponent, ServicesComponent, FaqComponent,TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
