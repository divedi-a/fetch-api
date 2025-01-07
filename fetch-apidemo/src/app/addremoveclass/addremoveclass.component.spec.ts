import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremoveclassComponent } from './addremoveclass.component';

describe('AddremoveclassComponent', () => {
  let component: AddremoveclassComponent;
  let fixture: ComponentFixture<AddremoveclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddremoveclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddremoveclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
