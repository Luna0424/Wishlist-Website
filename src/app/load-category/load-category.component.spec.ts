import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCategoryComponent } from './load-category.component';

describe('LoadCategoryComponent', () => {
  let component: LoadCategoryComponent;
  let fixture: ComponentFixture<LoadCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadCategoryComponent]
    });
    fixture = TestBed.createComponent(LoadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
