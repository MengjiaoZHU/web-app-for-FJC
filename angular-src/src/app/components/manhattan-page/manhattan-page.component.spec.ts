import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhattanPageComponent } from './manhattan-page.component';

describe('ManhattanPageComponent', () => {
  let component: ManhattanPageComponent;
  let fixture: ComponentFixture<ManhattanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManhattanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhattanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
