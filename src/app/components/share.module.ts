import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ListComponent} from "./list/list.component";
import {FormComponent} from './form/form.component';
import { ButtonComponent } from './UI/button/button.component';
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./UI/input/input.component";


@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    FormComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    CommonModule,
    HeaderComponent,
    ListComponent,
    FormComponent,
    InputComponent
  ]
})
export class ShareModule {
}
