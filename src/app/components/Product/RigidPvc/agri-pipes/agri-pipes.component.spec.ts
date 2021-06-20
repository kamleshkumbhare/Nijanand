import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriPipesComponent } from './agri-pipes.component';

describe('AgriPipesComponent', () => {
  let component: AgriPipesComponent;
  let fixture: ComponentFixture<AgriPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
