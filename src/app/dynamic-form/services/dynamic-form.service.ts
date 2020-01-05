import { Injectable } from '@angular/core';
import { Schema } from '../models/schema';
import { FormConfig } from '../models/form-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConfig } from '../models/field-config';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  private schema: Schema[] = [{
    label: 'Personal',
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
                  required: false,
                  value: 1
                }
              },
              {
                label: 'firstName',
                field: {
                  label: 'First Name',
                  property: 'firstName',
                  type: 'INPUT',
                  required: true
                }
              },
              {
                label: 'middleName',
                field: {
                  label: 'Middle Name',
                  property: 'middleName',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'lastName',
                field: {
                  label: 'Last Name',
                  property: 'lastName',
                  type: 'INPUT',
                  required: false
                }
              }
            ]
          }
        ]
      },
      {
        label: 'right',
        children: [
          {
            label: 'Age Details',
            children: [
              {
                label: 'DOB',
                field: {
                  label: 'Date Of Birth',
                  property: 'dob',
                  type: 'DATE',
                  required: false
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Address',
    children: [
      {
        label: 'left',
        children: [
          {
            label: 'Temporary',
            children: [
              {
                label: 'Address Line 1',
                field: {
                  label: 'Address Line 1',
                  property: 'tempAddressLine1',
                  type: 'INPUT',
                  required: false,
                  value: ''
                }
              },
              {
                label: 'Address Line 2',
                field: {
                  label: 'Address Line 2',
                  property: 'tempAddressLine2',
                  type: 'INPUT',
                  required: true
                }
              },
              {
                label: 'City / Town',
                field: {
                  label: 'City / Town',
                  property: 'tempCity',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'State / Province / Region',
                field: {
                  label: 'State / Province / Region',
                  property: 'tempState',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'Zip / Postal Code',
                field: {
                  label: 'Zip / Postal Code',
                  property: 'tempPostalCode',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'Country',
                field: {
                  label: 'Country',
                  property: 'tempCountry',
                  type: 'INPUT',
                  required: false
                }
              }
            ]
          }
        ]
      },
      {
        label: 'right',
        children: [
          {
            label: 'Permanent',
            children: [
              {
                label: 'Address Line 1',
                field: {
                  label: 'Address Line 1',
                  property: 'permanentAddressLine1',
                  type: 'INPUT',
                  required: false,
                  value: ''
                }
              },
              {
                label: 'Address Line 2',
                field: {
                  label: 'Address Line 2',
                  property: 'permanentAddressLine2',
                  type: 'INPUT',
                  required: true
                }
              },
              {
                label: 'City / Town',
                field: {
                  label: 'City / Town',
                  property: 'permanentCity',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'State / Province / Region',
                field: {
                  label: 'State / Province / Region',
                  property: 'permanentState',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'Zip / Postal Code',
                field: {
                  label: 'Zip / Postal Code',
                  property: 'permanentPostalCode',
                  type: 'INPUT',
                  required: false
                }
              },
              {
                label: 'Country',
                field: {
                  label: 'Country',
                  property: 'permanentCountry',
                  type: 'INPUT',
                  required: false
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Family',
    children: [
      {
        label: 'left',
        children: [
          {
            label: 'Father',
            children: [
              {
                label: 'First Name',
                field: {
                  label: 'First Name',
                  property: 'fatherFirstName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Last Name',
                field: {
                  label: 'Last Name',
                  property: 'fatherLastName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Date of Birth',
                field: {
                  label: 'Date of Birth',
                  property: 'fatherDOB',
                  type: 'DATE'
                }
              }
            ]
          },
          {
            label: 'Mother',
            children: [
              {
                label: 'First Name',
                field: {
                  label: 'First Name',
                  property: 'motherFirstName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Last Name',
                field: {
                  label: 'Last Name',
                  property: 'motherLastName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Date of Birth',
                field: {
                  label: 'Date of Birth',
                  property: 'motherDOB',
                  type: 'DATE'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'right',
        children: [
          {
            label: 'Child',
            children: [
              {
                label: 'First Name',
                field: {
                  label: 'First Name',
                  property: 'child1FirstName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Last Name',
                field: {
                  label: 'Last Name',
                  property: 'child1LastName',
                  type: 'INPUT'
                }
              },
              {
                label: 'Date of Birth',
                field: {
                  label: 'Date of Birth',
                  property: 'child1DOB',
                  type: 'DATE'
                }
              }
            ]
          }
        ]
      }
    ]
  }] as Schema[];

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
