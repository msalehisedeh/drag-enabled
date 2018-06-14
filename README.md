
# Welcome to Drag Enabled!
Have you looked at all the other Angular drag and drop libraries and noted they are not generic enough to fit within your design?

This library provides Angular 4 directives that enables you to have any html tag drag drop enabled within your component control just by adding **DragDropModule** into your AppModule.

You will be able to pass a medium object to the directives. The medium will supposedly have or know of certain things that can help your code make a decision on allowing a drag or a drop to take place. It could be a reference to a node or a structure in your code. At the start, a "dragEnabled" requst with a DragEvent will be sent to your component. if returned true, dragging begins. At the end of drag operation, an event with the source medium, source HTMLElement, destination medium, and destination HTMLElement will be sent to your component to perform any action necessary.

[Live Demo (drag/drop tags)](https://tagbox.stackblitz.io) | [Source code](https://github.com/msalehisedeh/drag-enabled) | [Comments/Requests](https://github.com/msalehisedeh/drag-enabled/issues)


# Version 1.0.0
fixed a declaration mistake. Increasing version number to 1.0.0 because I think that's it.. and there is nothing more to enhance.. unless otherwise, i get a request to make specific enhancements... 

# Version 0.2.4
Had to remove renderer from the directives to avoid issues I was facing in stackblitz.io for creating live demo of complex components. 

# Version 0.2.3

Added a **DragInDocumentDirective** to resolve issue found in Mozzila when there is a drag only process and a need to drag an element within a document. If you want to do a drag and drop on a node within hierarchy, we recommend you use **DragDirective** and **DropDirective**.

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

# Version 0.1.2
Turned out that this library can become a lot more useful if I pass the event location as well. So here it is... Made the new attributes optional to make it compatible for those who are using previous version if they get an accidental upgrade through npm install...

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

# Version 0.0.1

```javascript
MODULE:
	DragDropModule

DEPENDENCIES:
	basic Angular core libraries
```

Interfaces

```javascript
export interface DragEvent {
	medium: any,
	node: HTMLElement
}

export interface DropEvent {
	source: DragEvent,
	destination: {
		medium: any,
		node: HTMLElement
	}
}
```

The following are available functionalities presented in this version:

Sample code

```javascript
<th scope="col"
	[medium]="headerInfo"
	[dragEnabled]="isDragEnabled.bind(this)"
	[dropEnabled]="dropEnabled.bind(this)"
	(onDragStart)="onDragStart($event)"
	(onDrag)="onDrag($event)"
	(onDragEnd)="onDragEnd($event)"
	(onDrop)="onDrop($event)">header text</th>

.............

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
.............

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

