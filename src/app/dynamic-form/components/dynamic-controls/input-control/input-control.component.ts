import { Component, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent extends BaseControl implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
