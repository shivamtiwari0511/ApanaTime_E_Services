import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FactsComponent } from "./facts/facts.component";
import { AboutComponent } from "./about/about.component";
import { FeaturesComponent } from "./features/features.component";
import { ServicesComponent } from "./services/services.component";
import { PricePlanComponent } from "./price-plan/price-plan.component";
import { FaqComponent } from "./faq/faq.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { TeamComponent } from "./team/team.component";
import { BlogComponent } from "./blog/blog.component";
import { ClientsComponent } from "./clients/clients.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FactsComponent, AboutComponent, FeaturesComponent, ServicesComponent, PricePlanComponent, FaqComponent, TestimonialComponent, TeamComponent, BlogComponent, ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
