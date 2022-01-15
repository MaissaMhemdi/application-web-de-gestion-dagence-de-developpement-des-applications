import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeveloppeurComponent } from './details-developpeur.component';

describe('DetailsDeveloppeurComponent', () => {
  let component: DetailsDeveloppeurComponent;
  let fixture: ComponentFixture<DetailsDeveloppeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDeveloppeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDeveloppeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
