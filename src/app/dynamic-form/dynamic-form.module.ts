import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { LabelControlComponent } from './components/dynamic-controls/label-control/label-control.component';
import { InputControlComponent } from './components/dynamic-controls/input-control/input-control.component';
import { SelectControlComponent } from './components/dynamic-controls/select-control/select-control.component';
import { DateControlComponent } from './components/dynamic-controls/date-control/date-control.component';

const exportComponent = [
  LabelControlComponent,
  InputControlComponent,
  SelectControlComponent,
  DateControlComponent
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
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    ...exportComponent
  ]
})
export class DynamicFormModule { }
