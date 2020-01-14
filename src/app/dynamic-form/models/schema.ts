import { FieldConfig } from './field-config';

export interface Schema {
  label: string;
  field: FieldConfig;
  gender: string;
  children: Schema[];
}
