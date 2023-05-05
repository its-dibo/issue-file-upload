import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFileComponent } from './formly-file-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  template: ` <form
    [formGroup]="formGroup"
    method="post"
    enctype="multipart/form-data"
  >
    <formly-form [form]="formGroup" [fields]="fields" [model]="model">
    </formly-form>

    <button (click)="onSubmit()">Submit</button>
  </form>`,
})
export default class ContentEditorComponent {
  fields: FormlyFieldConfig[];
  model?: { [key: string]: any };
  formGroup = new FormGroup(<any>{});

  constructor() {
    this.fields = [
      {
        key: 'file',
        type: FormlyFileComponent,
        templateOptions: {
          label: 'media',
        },
      },
    ];
  }

  onSubmit() {
    console.log('onSubmit', {
      value: this.formGroup.value,
      model: this.model,
    });
  }
}
