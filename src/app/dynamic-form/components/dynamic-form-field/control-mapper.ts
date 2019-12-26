import { Type } from '@angular/core';
import { BaseControl } from '../dynamic-controls/base-control';
import { LabelControlComponent } from '../dynamic-controls/label-control/label-control.component';
import { InputControlComponent } from '../dynamic-controls/input-control/input-control.component';

export const controlMapper: { [widget: string]: Type<BaseControl> } = {

  LABEL: LabelControlComponent,
  INPUT: InputControlComponent
}

