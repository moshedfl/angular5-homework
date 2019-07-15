import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputsComponent } from './comps/inputs/inputs.component';
import { TableComponent } from './comps/table/table.component';
import { ResetComponent } from './comps/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    TableComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
