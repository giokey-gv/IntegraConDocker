import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenhubComponent } from './zenhub.component';

describe('ZenhubComponent', () => {
  let component: ZenhubComponent;
  let fixture: ComponentFixture<ZenhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
