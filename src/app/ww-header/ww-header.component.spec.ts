import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwHeaderComponent } from './ww-header.component';

describe('WwHeaderComponent', () => {
  let component: WwHeaderComponent;
  let fixture: ComponentFixture<WwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
