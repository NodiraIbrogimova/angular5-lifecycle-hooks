import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() text;

  count: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) { 
      console.log(changes);
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(`${propertyName} : currentValue = ${current} previousValue = ${previous}`);
    }
  }

  ngOnInit() {
    console.log(`NgOnInit`);
  }

}
