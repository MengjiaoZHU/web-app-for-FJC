import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueensPageComponent } from './queens-page.component';

describe('QueensPageComponent', () => {
  let component: QueensPageComponent;
  let fixture: ComponentFixture<QueensPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueensPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
