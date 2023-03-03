npm install -g @angular/cli@latest
npm install g npm@9.2.0

ng new <any-app-name> --no-strict
ng serve

ng generate component <any-component-name>
ng g c <any-component-name>

**********************************************************************
*** Adding bootstrap locally ***
npm install --save bootstrap@3
then edit file "angular.json" with below under architect key:
	
            "styles": [
			  "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
**********************************************************************

Selectors work in 3 way:
1. Selector as an element: 'app-servers'     // Most widely used
   in html: <app-server></app-server>
2. Selector as an attribute: '[app-servers]'
   in html: <div app-server></div>
2. Selector as a class: '.app-servers'
   in html: <div class="app-server"></div>
   
  DATA - BINDING
1. String Interpolation: {{ data }}
2. Property Binding: [property]="data"
3. Event Binding: (event)="expression"
3. Combination of both, Two-Way-Binding: [(ngModel)]="data"

	DIRECTIVE
Directives are instructions in the DOM, with or without template.
Usually defined as Attribute like below:

<p appTurnGreen> Receives a green background ! </p>

@Directive({
	selector: '[appTurnGreen]'
})
export class TurnGreenDirective {

}

1. Structural Directive: *ngIf, *ngFor
	 - It changes the structure of DOM

***********************************************
	PROPERTY & EVENT BINDING
Applied On
HTML Element: Native properties & Events
Directive: Custom properties & Events
Components: Custom properties & Events
***********************************************

@Input() : makes property bindable from outside
@Output(): makes property listenable from outside

Shadow Dom in View Encapsulaion

encapsulation: ViewEncapsulation.Emulated // .None, .Native
ViewEncapsulation.Native uses shadow dom technology, which is not supported by all browsers.

Local references in template:   
        <!-- <input type="text" class="form-control" [(ngModel)]="newServerName"> -->
        <input type="text" class="form-control" #inputServerName>  <!-- adding local referenece in templates -->

*************************************************************************************************************************************

Structural directives like "*ngIf", change the structure of DOM.
Unlike structural directives, attribute directives don't Add or Remove elements. They only change the elements they were placed on.

ngStyle directive: to dynamically assign a style or to change the css style by itself.
ngClass directive: to dynamically add or remove css classes.

Javascript support sourceMaps
DEBUG: use sourceMaps to debug
*************************************************************************************

string interpolation(  {{data}}   )       => Output Data
property binding(  [property]="data"   )  => Output Data
Event binding(  (event)="expression"   )  <= React to user events

Two way binding (  [(ngModel)]="data"   )   ##Combination of propert and event binding can be acieved by following:
 1. HTML elements :: Native Properties & Events
 2. Directives ::  Custom Properties & Events
 3. Components ::  Custom Properties & Events