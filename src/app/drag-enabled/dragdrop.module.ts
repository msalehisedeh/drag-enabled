import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTransfer } from './datatransfer';
import { DragDirective } from './drag.directive';
import { DropDirective } from './drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		DragDirective,
		DropDirective
  ],
  exports: [
		DragDirective,
		DropDirective
  ],
  entryComponents: [
  ],
  providers: [
		DragDirective,
		DropDirective,
    DataTransfer
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DragDropModule {}
