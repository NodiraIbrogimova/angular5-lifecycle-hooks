# About the project

A component has a `lifecycle` managed by Angular. Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM. Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur. A directive has the same set of lifecycle hooks.

`ngOnChanges()`	- Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values. Called before `ngOnInit()` and whenever one or more data-bound input properties change.

`ngOnInit()` - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.Called once, after the first `ngOnChanges()`.

This project explains how `ngOnChanges()` and `ngOnInit()` works with simple example using parent-child components interaction. When the User inserts some text in `parent component` the `child component` will print the text synchronously. 
Object - changes of `SimpleChange`  class of `SimpleChanges` interface is passed in ngOnChanges() and iterated over [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). 
The attribute itself is considered to be propety name of the object. The previous and current values are store in `previous` and `current` locations respectively. On each change in component, the `ngOnChanges()` will print the values of current and previous followed by property name.
`ngOnInit()` - will print a message every time the component is initialized.





