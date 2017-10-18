import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRequestComponent } from './section-request.component';

describe('SectionRequestComponent', () => {
  let component: SectionRequestComponent;
  let fixture: ComponentFixture<SectionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
