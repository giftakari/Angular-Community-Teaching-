import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforSampleComponent } from './ngfor-sample.component';

describe('NgforSampleComponent', () => {
  let component: NgforSampleComponent;
  let fixture: ComponentFixture<NgforSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
