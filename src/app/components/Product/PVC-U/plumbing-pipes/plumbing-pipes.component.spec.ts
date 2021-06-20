import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingPipesComponent } from './plumbing-pipes.component';

describe('PlumbingPipesComponent', () => {
  let component: PlumbingPipesComponent;
  let fixture: ComponentFixture<PlumbingPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbingPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
