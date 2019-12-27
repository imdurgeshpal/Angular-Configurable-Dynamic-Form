import { FieldConfig } from './field-config';

export interface Schema {
  label: string;
  field: FieldConfig;
  children: Schema[];
}
