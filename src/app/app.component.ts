import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

declare var WOW: any;
declare var $: any;  // Declare jQuery globally for TypeScript

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FooterComponent, HeaderComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ApanaTime_E_Services';

  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {

    // Listen for routing events to show or hide the spinner
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;  // Show spinner on navigation start
      }

      // Hide spinner on navigation end or if there's an error/cancel
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => { this.isLoading = false; }, 500);  // Add slight delay for smoother transition
      }
    });

    // Initialize WOW.js if it's available
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    } else {
      console.error('WOW.js is not defined');
    }
     // Subscribe to Router events to re-initialize the carousel on navigation
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.initializeOwlCarousel();
    });
  }
  

  ngAfterViewInit() {
    // Initialize the Owl Carousel after the view has been initialized
    this.initializeOwlCarousel();
  }

  initializeOwlCarousel() {
    // Delay to ensure the DOM is fully rendered and ready for Owl Carousel initialization
    setTimeout(() => {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
      });
    }, 100);  // Delay in milliseconds to make sure DOM is ready
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTopButton = document.querySelector('.back-to-top') as HTMLElement;
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
