import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NavServicesComponent } from './Components/nav-services/nav-services.component';
import { BlogGridComponent } from './Components/navBlogs/blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './Components/navBlogs/blog-details/blog-details.component';
import { PriceComponent } from './Components/navMoreAbout/price/price.component';
import { OurFeatureComponent } from './Components/navMoreAbout/our-feature/our-feature.component';
import { TeamMembersComponent } from './Components/navMoreAbout/team-members/team-members.component';
import { TestimonialsComponent } from './Components/navMoreAbout/testimonials/testimonials.component';
import { FaqsComponent } from './Components/navMoreAbout/faqs/faqs.component';
import { ContactsComponent } from './Components/contacts/contacts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: '_aboutUs', component: AboutUsComponent},
    { path: '_services', component: NavServicesComponent},
    { path: '_blog/blogs', component: BlogGridComponent},
    { path: '_blog/blogDetails', component: BlogDetailsComponent},
    { path: '_moreAbout/pricePlans', component: PriceComponent},
    { path: '_moreAbout/features', component: OurFeatureComponent},
    { path: '_moreAbout/team', component: TeamMembersComponent},
    { path: '_moreAbout/testimonials', component: TestimonialsComponent},
    { path: '_moreAbout/quote', component: FaqsComponent},
    { path: '_contactUs', component: ContactsComponent}
];
