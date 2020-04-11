import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitationComponent } from './localitation.component';

describe('LocalitationComponent', () => {
  let component: LocalitationComponent;
  let fixture: ComponentFixture<LocalitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
