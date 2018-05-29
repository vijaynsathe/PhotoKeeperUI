import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserphotosComponent } from './userphotos.component';

describe('UserphotosComponent', () => {
  let component: UserphotosComponent;
  let fixture: ComponentFixture<UserphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
