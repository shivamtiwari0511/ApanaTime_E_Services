import { AfterViewInit, Component, OnInit } from '@angular/core';


declare var $: any; // Declare jQuery globally for TypeScript compatibility
@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   $('.testimonial-carousel').owlCarousel({
  //     loop: true,
  //     //margin: 30,
  //     //nav: true,
  //     dots: true,
  //     autoplay: true,
  //     autoplayTimeout: 500000,
  //     // Speed for autoplay transition (in ms)
  //     autoplaySpeed: 1000, 
  //     smartSpeed: 800, // Smooth scroll speed (in ms)
  //     center: true,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       768: {
  //         items: 2,
  //       },
  //       992: {
  //         items: 3,
  //       },
  //     },
  //   });
  // }

  // ngAfterViewInit(): void {
  //   const carousel = $('.testimonial-carousel');
  //   carousel.owlCarousel({
  //     loop: true,
  //     dots: true,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     autoplaySpeed: 1000,
  //     smartSpeed: 800,
  //     center: true,
  //     responsive: {
  //       0: { items: 1 },
  //       768: { items: 2 },
  //       992: { items: 3 },
  //     },
  //     onTranslate: function () {
  //       updateOpacity(); // Trigger immediately when translation starts
  //     },
  //     onTranslated: function () {
  //       updateOpacity(); // Ensure the opacity is updated after translation ends
  //     },
  //     onInitialized: function () {
  //       updateOpacity(); // Set opacity initially on load
  //     },
  //   });
  
  //   // Function to update the opacity of items
  //   function updateOpacity() {
  //     // Reset opacity for all items
  //     carousel.find('.owl-item').css('opacity', '0.3');
  
  //     // Set full opacity for the center item
  //     carousel.find('.owl-item.active.center').css('opacity', '1');
  //   }
  // }

  ngAfterViewInit(): void {
    const carousel = $('.testimonial-carousel');
    carousel.owlCarousel({
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      smartSpeed: 800,
      center: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
      },
      onInitialized: updateOpacity, // Apply opacity on initialization
      onTranslate: updateOpacity,   // Apply opacity when translation starts
      onTranslated: updateOpacity,  // Ensure opacity after translation ends
    });
  
    // Function to update the opacity of items
    function updateOpacity() {
      const items = carousel.find('.owl-item');
      items.css('opacity', '0.3'); // Reset opacity for all items
      items.filter('.center').css('opacity', '1'); // Set full opacity for the center item
    }
  }
  
  
}
