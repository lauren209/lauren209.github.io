import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrelandComponent } from './ireland.component';

describe('IrelandComponent', () => {
  let component: IrelandComponent;
  let fixture: ComponentFixture<IrelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
