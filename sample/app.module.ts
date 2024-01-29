import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@sedeh/drag-enabled';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
