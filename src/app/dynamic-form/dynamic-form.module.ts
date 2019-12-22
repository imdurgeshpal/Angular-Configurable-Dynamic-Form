import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { LabelControlComponent } from './components/dynamic-controls/label-control/label-control.component';



@NgModule({
  declarations: [DynamicFormComponent, DynamicFormFieldComponent, LabelControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports : [
    DynamicFormComponent
  ],
  entryComponents : [
    LabelControlComponent
  ]
})
export class DynamicFormModule { }
