import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsjblueComponent } from './ssjblue.component';

describe('SsjblueComponent', () => {
  let component: SsjblueComponent;
  let fixture: ComponentFixture<SsjblueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsjblueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsjblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
