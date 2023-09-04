import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceruserprofileComponent } from './freelanceruserprofile.component';

describe('FreelanceruserprofileComponent', () => {
  let component: FreelanceruserprofileComponent;
  let fixture: ComponentFixture<FreelanceruserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelanceruserprofileComponent]
    });
    fixture = TestBed.createComponent(FreelanceruserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
