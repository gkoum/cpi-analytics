import { FooterComponent } from './footer.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', function () {
  let de: DebugElement;
  let comp: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FooterComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.created-by'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected #created-by text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/wantedpixel/i,
      '<h1> should say something about "Angular"');
  });
});
