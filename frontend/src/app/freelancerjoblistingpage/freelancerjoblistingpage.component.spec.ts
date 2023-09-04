import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerjoblistingpageComponent } from './freelancerjoblistingpage.component';

describe('FreelancerjoblistingpageComponent', () => {
  let component: FreelancerjoblistingpageComponent;
  let fixture: ComponentFixture<FreelancerjoblistingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerjoblistingpageComponent]
    });
    fixture = TestBed.createComponent(FreelancerjoblistingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
