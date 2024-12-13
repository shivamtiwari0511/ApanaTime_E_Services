import { Component } from '@angular/core';
import { PricePlanComponent } from "../../home/price-plan/price-plan.component";
import { FaqComponent } from "../../home/faq/faq.component";

@Component({
  selector: 'app-price',
  imports: [PricePlanComponent, FaqComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {

}
