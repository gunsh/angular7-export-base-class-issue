import { NgModule, Component, Input } from '@angular/core';

// Uncomment "export" below to fix the bug
//export
class BaseComponent {
  @Input() txt: string = "nothing";
}

@Component({
  selector: '[derived]',
  template: `<p>{{txt}}</p>`
})
export class DerivedComponent extends BaseComponent {

}

@Component({
  selector: 'app-root',
  template: `<div derived [txt]="'hello world!'"></div>`
})
export class AppComponent {
}

@NgModule({
  declarations: [
    DerivedComponent
  ],
  exports: [
    DerivedComponent
  ]
})
export class MyModule {

}
