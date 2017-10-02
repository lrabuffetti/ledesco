import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVarComponent } from './navigation-var.component';

describe('NavigationVarComponent', () => {
  let component: NavigationVarComponent;
  let fixture: ComponentFixture<NavigationVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
