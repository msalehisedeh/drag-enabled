
# Welcome to Drag Enabled!
Have you looked at all the other Angular drag and drop libraries and noted they are not generic enough to fit within your design?

This library provides Angular 4 directives that enables you to have any html tag drag drop enabled within your component control just by adding **DragDropModule** into your AppModule.

You will be able to pass a medium object to the directives. The medium will supposedly have or know of certain things that can help your code make a decision on allowing a drag or a drop to take place. It could be a reference to a node or a structure in your code. At the start, a "dragEnabled" requst with a DragEvent will be sent to your component. if returned true, dragging begins. At the end of drag operation, an event with the source medium, source HTMLElement, destination medium, and destination HTMLElement will be sent to your component to perform any action necessary.

**NOTE:** Starting with version 1.1.0 this library is compatible with Angular 6+.

**NOTE:** Starting with version 2.0.0 you need to import this library through @sedeh/drag-enabled.

[Comments/Requests](https://github.com/msalehisedeh/drag-enabled/issues) | [Source code](https://github.com/msalehisedeh/drag-enabled/tree/master/src/app) | [Live Demo (drag/drop tags)](https://tagbox.stackblitz.io)

## Basic Information

```javascript
MODULE:
	DragDropModule

EXPORTS:
	DragDirective,
	DragInDocumentDirective,
	DropDirective

DEPENDENCIES:
	basic Angular core libraries
```

## Interfaces

```javascript
export interface DragEvent {
	medium: any,
	node: HTMLElement,
	clientX?: number,
	clientY?: number,
	offset?: {
		x: number,
		y: number
	}
}

export interface DropEvent {
	source: DragEvent,
	destination: {
		medium: any,
		node: HTMLElement,
		clientX?: number,
		clientY?: number
	}
}
```

## Sample code

**App module**
```javascript
import { NgModule } from '@angular/core';
import {DragDropModule} from '@sedeh/drag-enabled';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**HTML**
```javascript
<th scope="col"
	[medium]="headerInfo"
	[dragEnabled]="isDragEnabled.bind(this)"
	[dropEnabled]="dropEnabled.bind(this)"
	(onDragStart)="onDragStart($event)"
	(onDrag)="onDrag($event)"
	(onDragEnd)="onDragEnd($event)"
	(onDrop)="onDrop($event)">header text</th>
```

**Component**
```javascript
import {DragEvent, DropEvent} from '@sedeh/drag-enabled';

isDragEnabled(event: DragEvent) {
	return event.medium.dragable;
}
onDragStart(event: DragEvent){
}
onDrag(event: DragEvent){
}
onDragEnd(event: DragEvent){
}
dropEnabled(event: DropEvent) {
	return event.destination.medium.dragable;
}
onDrop(event: DropEvent){
	// swapColumns(source.medium, source.node, destination.medium, destination.node);
}
```

**SCSS**
```javascript
table {
	th {
		&.drag-over {
		background-color: #9b9b9b;
		.title, .icon {
			color: #eee;
		}
	}
}
```

## Releases

| Version  |Description                                                                                                                                  |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
|2.1.0     |Fixed IE problem. Drag & Drop is now working in IE.                                                                                          |
|2.0.1     |updated dependencies.                                                                                                                        |
|2.0.0     |Re-organizing libraries I am providing. Added scope to the project. From now on Accessing through @sedeh/drag-enabled                        |
|1.2.0     |It was brought to my attention that some users have trouble using my components in their angular 6 environment. Since I had only updated few dependencies when moved to Angular 6, I am thinking dependencies are causing issues. So, for this release, I am updating all dependencies to what Angular 6 applications are expecting to have. Please let me know if this is fixing or not fixing any issues you are facing. |
|1.1.0     |Updated libraries to become compatible with Angular 6+.                                                                                      |
|1.0.1     |Compiled with AOT option and resolved issues.                                                                                                |
|1.0.0     |fixed a declaration mistake. Increasing version number to 1.0.0 because I think that's it. and there is nothing more to enhance. unless otherwise, I get a request to make specific enhancements. |
|0.2.4     |Had to remove renderer from the directives to avoid issues I was facing in stackblitz.io for creating live demo of complex components.       |
|0.2.3     |Added a **DragInDocumentDirective** to resolve issue found in Mozilla when there is a drag only process and a need to drag an element within a document. If you want to do a drag and drop on a node within hierarchy, we recommend you use **DragDirective** and **DropDirective**. |
|0.1.2     |Turned out that this library can become a lot more useful if I pass the event location as well. So here it is. Made the new attributes optional to make it compatible for those who are using previous version if they get an accidental upgrade through npm install. |
|0.0.1     |Initial functionality.                                                                                                                       |
