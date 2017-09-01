import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrooklynPageComponent } from './brooklyn-page.component';

describe('BrooklynPageComponent', () => {
  let component: BrooklynPageComponent;
  let fixture: ComponentFixture<BrooklynPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrooklynPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrooklynPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
