import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FormlyMaterialModule } from '@ngx-formly/material';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  standalone: true,
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <input type="file" [formControl]="formControl" [formlyAttributes]="field" />
  `,
})
export class FormlyFileComponent extends FieldType<FieldTypeConfig> {}

@Directive({
  standalone: true,
  selector: 'input[type=file]',
  host: {
    '(change)': 'onChange($event.target.files)',
    '(blur)': 'onTouched()',
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true },
  ],
})
export class FileValueAccessor implements ControlValueAccessor {
  value: any;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(_value: any) {}
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
