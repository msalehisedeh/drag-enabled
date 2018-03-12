

# Welcome to Drag Enabled!

Have you looked at all the other Angular drag and drop libraries and noted they are not generic enough to fit within your design?
This library provides Angular 4 directives that enables you to have any html tag drag drop enabled within your component control just by 
adding DragDropModule into your AppModule.


# Version 0.0.0
The following are available functionalities presented in this version. 
```
DEPENDENCIES: basic Angular core libraries
```

Sample code
```
<th scope="col"
	[dragEnabled]="dragEnabled.bind(this)"
	[dropEnabled]="dropEnabled.bind(this)"
	[medium]="header1"
	(onDragStart)="onDragStart($event)"
	(onDragEnd)="onDragEnd($event)"
	(onDrop)="onDrop($event)">h1</th>

	.............

  	dragEnabled(medium) {
		return medium.dragable;
	}
	dropEnabled(event) {
		return event.destination.dragable;
	}
	onDragStart(event){
	}
	onDragEnd(event){
	}
	onDrop(event){
		// this.swapColumns(event.source.key, event.destination.key);
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

[Source code](https://github.com/msalehisedeh/drag-enabled)


