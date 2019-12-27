import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { FormConfig } from '../../models/form-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  formConfig: FormConfig;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formConfig = this.formService.getFormConfig();
  }

  submit() {
    console.log(this.formConfig.formGroup.value);
  }

}
