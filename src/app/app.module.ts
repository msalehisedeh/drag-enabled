import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from './drag-enabled/dragdrop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DragDropModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
