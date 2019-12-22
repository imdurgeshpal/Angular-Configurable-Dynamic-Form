import { Component, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'app-label-control',
  templateUrl: './label-control.component.html',
  styleUrls: ['./label-control.component.scss']
})
export class LabelControlComponent extends BaseControl implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
