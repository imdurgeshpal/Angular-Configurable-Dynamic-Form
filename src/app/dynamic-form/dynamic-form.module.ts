import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { LabelControlComponent } from './components/dynamic-controls/label-control/label-control.component';
import { InputControlComponent } from './components/dynamic-controls/input-control/input-control.component';

const exportComponent = [
LabelControlComponent,
InputControlComponent
]

@NgModule({
  declarations: [
    ...exportComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports : [
    DynamicFormComponent
  ],
  entryComponents : [
    ...exportComponent
  ]
})
export class DynamicFormModule { }
