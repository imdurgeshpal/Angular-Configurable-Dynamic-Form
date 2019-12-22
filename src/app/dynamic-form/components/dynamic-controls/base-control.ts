import { OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup, AbstractControl } from '@angular/forms';

export abstract class BaseControl implements OnInit {

  field: FieldConfig;
  formGroup: FormGroup;
  control: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.control = this.formGroup.get(this.field.property);
  }
}
