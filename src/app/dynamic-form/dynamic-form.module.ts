import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { BaseControlComponent } from './components/dynamic-controls/base-control/base-control.component';



@NgModule({
  declarations: [DynamicFormComponent, DynamicFormFieldComponent, BaseControlComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicFormModule { }
