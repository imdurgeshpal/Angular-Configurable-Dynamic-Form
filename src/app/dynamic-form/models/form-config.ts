import { Schema } from './schema';
import { FormGroup } from '@angular/forms';

export interface FormConfig {
  schema: Schema[];
  formGroup: FormGroup;
}
