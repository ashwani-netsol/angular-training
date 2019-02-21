import { Component, OnInit, Input, SimpleChange, OnChanges, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  animations: [
    state('open', style({
      opacity: 1,
      borderColor: 'yellow'
    })),
    transition('open => closed', [
      animate('1s')
    ])
  ]
})
export class ChildComponent implements OnInit, OnChanges {

  childGroup: string = 'Red Fox';

  constructor() { }

  ngOnInit() {
  }

  /**
   * Basic way of recieving property from parent component
   */
  @Input('childName') child: string
  @Output() buttonClicked = new EventEmitter<boolean>();
  private _collegeName: string = '';

  /**
   * Getter setter fashion of recieving input from parent
   */
  @Input()
  set collegeName(name: string) {
    this._collegeName = (name && name.trim()) || '<No college name set>';
  }

  get collegeName() : string {
    return this._collegeName;
  }

  clickChildButton() {
    this.buttonClicked.emit(!this.buttonClicked)
  }

  alertInChild() {
    alert('Child alerts you');
  }

  /**
   * Monitor after the change in the values
   * @param changes 
   */
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
  }

}
