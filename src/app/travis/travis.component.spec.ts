import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravisComponent } from './travis.component';

describe('TravisComponent', () => {
  let component: TravisComponent;
  let fixture: ComponentFixture<TravisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
