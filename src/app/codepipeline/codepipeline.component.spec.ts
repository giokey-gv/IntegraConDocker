import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepipelineComponent } from './codepipeline.component';

describe('CodepipelineComponent', () => {
  let component: CodepipelineComponent;
  let fixture: ComponentFixture<CodepipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodepipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
