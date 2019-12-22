import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '../dynamic-controls/base-control';
import { controlMapper } from './control-mapper';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {

  @Input() field: FieldConfig;
  @Input() formGroup: FormGroup;
  @ViewChild('widgetContainer', { read : ViewContainerRef, static: true }) widgetContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.control = this.formGroup.get(this.field.property);

    // getting widget component or label widget component based on configuration of field
    const control = controlMapper[this.field.type];

    const widgetFactory = this.resolver.resolveComponentFactory<BaseControl>(control);
    const component = this.widgetContainer.createComponent(widgetFactory);

    component.instance.field = this.field; // setting field to the control
    component.instance.formGroup = this.formGroup; // setting formgroup to the control
  }

}
