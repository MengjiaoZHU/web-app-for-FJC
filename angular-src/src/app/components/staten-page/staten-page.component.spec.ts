import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatenPageComponent } from './staten-page.component';

describe('StatenPageComponent', () => {
  let component: StatenPageComponent;
  let fixture: ComponentFixture<StatenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
