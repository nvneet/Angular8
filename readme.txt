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