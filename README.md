# Angular Lifecycle Hooks Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About the project

A component has a `lifecycle` managed by Angular. Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM. Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur. A directive has the same set of lifecycle hooks.

`ngOnChanges()`	- Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values. Called before ngOnInit() and whenever one or more data-bound input properties change.

`ngOnInit()` - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.Called once, after the first ngOnChanges().

This project explains how ngOnChanges() and ngOnInit() works with simple example using parent-child components interaction. When the User inserts some text in `parent component` the `child component` will print the text synchronously. 
Object - changes of `SimpleChange`  class of `SimpleChanges` interface is passed in ngOnChanges() and iterated over [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). 
The attribute itself is considered to be propety name of the object. The previous and current values are store in `previous` and `current` locations respectively. On each change in component, the `ngOnChanges()` will print the values of current and previous followed by property name.
`ngOnInit()` - will print a message every time the component is initialized.





