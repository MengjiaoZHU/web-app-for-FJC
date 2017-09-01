import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BronxPageComponent } from './bronx-page.component';

describe('BronxPageComponent', () => {
  let component: BronxPageComponent;
  let fixture: ComponentFixture<BronxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BronxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BronxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
