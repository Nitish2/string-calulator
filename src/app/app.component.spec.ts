import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => { TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule],
    declarations: [AppComponent],
  });
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create the app', () => {
    const app = component;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'string-calculator'`, () => {
    const app = component;
    expect(app.title).toEqual('string-calculator');
  });

  it(`should have return' add function'`, () => {
    component.output=0
    const result = component.add('1/n,23')
    expect(component.add('123')).toEqual(6);
  });

});
