import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListserversComponent } from './listservers.component';

describe('ListserversComponent', () => {
  let component: ListserversComponent;
  let fixture: ComponentFixture<ListserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListserversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
