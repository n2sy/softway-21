import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MswordComponent } from './msword.component';

describe('MswordComponent', () => {
  let component: MswordComponent;
  let fixture: ComponentFixture<MswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
