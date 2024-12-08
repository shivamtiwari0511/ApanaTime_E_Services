import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMoreAboutComponent } from './nav-more-about.component';

describe('NavMoreAboutComponent', () => {
  let component: NavMoreAboutComponent;
  let fixture: ComponentFixture<NavMoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMoreAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
