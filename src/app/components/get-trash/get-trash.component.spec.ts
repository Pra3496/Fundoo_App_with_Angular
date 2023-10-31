import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTrashComponent } from './get-trash.component';

describe('GetTrashComponent', () => {
  let component: GetTrashComponent;
  let fixture: ComponentFixture<GetTrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTrashComponent]
    });
    fixture = TestBed.createComponent(GetTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
