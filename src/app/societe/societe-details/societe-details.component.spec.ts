import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteDetailsComponent } from './societe-details.component';

describe('SocieteDetailsComponent', () => {
  let component: SocieteDetailsComponent;
  let fixture: ComponentFixture<SocieteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
