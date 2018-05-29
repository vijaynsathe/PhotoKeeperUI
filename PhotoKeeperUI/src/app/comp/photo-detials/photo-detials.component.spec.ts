import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetialsComponent } from './photo-detials.component';

describe('PhotoDetialsComponent', () => {
  let component: PhotoDetialsComponent;
  let fixture: ComponentFixture<PhotoDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
