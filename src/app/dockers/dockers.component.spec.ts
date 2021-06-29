import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockersComponent } from './dockers.component';

describe('DockersComponent', () => {
  let component: DockersComponent;
  let fixture: ComponentFixture<DockersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
