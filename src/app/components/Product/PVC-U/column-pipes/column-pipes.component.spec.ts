import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPipesComponent } from './column-pipes.component';

describe('ColumnPipesComponent', () => {
  let component: ColumnPipesComponent;
  let fixture: ComponentFixture<ColumnPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
