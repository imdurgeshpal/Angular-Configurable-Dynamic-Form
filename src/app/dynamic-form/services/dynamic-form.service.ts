import { Injectable } from '@angular/core';
import { Schema } from '../models/schema';
import { FormConfig } from '../models/form-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConfig } from '../models/field-config';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  private schema: Schema [] = [{
    label: 'General',
    children: [
      {
        label: 'left',
        children: [
          {
            label: 'General Information',
            children: [
              {
                label: 'Id',
                field: {
                  label: 'Id',
                  property: 'id',
                  type: 'LABEL',
                  required: false
                }
              }
            ]
          }
        ]
      }
    ]
  }] as Schema [];

  constructor(private formBuilder: FormBuilder) { }

  getFormConfig(): FormConfig {
    const schema = this.schema;
    const formConfig = {
      schema: this.schema
    } as FormConfig;
    const controls: any = {};
    this.prepareFormGroup(schema, controls);
    formConfig.formGroup = this.formBuilder.group(controls);
    return formConfig;
  }

  prepareFormGroup(schema: Schema[], controls) {
    schema.forEach(nav => {
      nav.children.forEach(side => {
        side.children.forEach(panel => {
          panel.children.forEach(control => {
            const field = control.field;
            /* creating form controls for reactive form */
            controls[field.property] = this.getControlConfig(field);
          });
        });
      });
    });
  }

  getControlConfig(field: FieldConfig) {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }

    if (validators.length) {
      return [field.value, validators];
    }
    return field.value;
  }
}
