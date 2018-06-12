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
    for (const propertyName in changes) { 
      console.log(changes);
      const change = changes[propertyName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);
      console.log(`${propertyName} : currentValue = ${current} previousValue = ${previous}`);
    }
  }

  ngOnInit() {
    console.log(`NgOnInit`);
  }

}
