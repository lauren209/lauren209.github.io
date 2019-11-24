import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsComponent } from './continents.component';

describe('ContinentComponent', () => {
  let component: ContinentsComponent;
  let fixture: ComponentFixture<ContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
