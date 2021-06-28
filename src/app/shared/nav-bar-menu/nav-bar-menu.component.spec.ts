import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMenuComponent } from './nav-bar-menu.component';

describe('NavBarMenuComponent', () => {
  let component: NavBarMenuComponent;
  let fixture: ComponentFixture<NavBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
