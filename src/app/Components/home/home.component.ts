import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FactsComponent } from "./facts/facts.component";
import { FeaturesComponent } from "./features/features.component";
import { ServicesComponent } from "./services/services.component";
import { FaqComponent } from "./faq/faq.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FactsComponent, FeaturesComponent, ServicesComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
