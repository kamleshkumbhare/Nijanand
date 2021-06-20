import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWRComponent } from './swr.component';

describe('SWRComponent', () => {
  let component: SWRComponent;
  let fixture: ComponentFixture<SWRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SWRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SWRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
