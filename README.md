
# Welcome to Drag Enabled!
Have you looked at all the other Angular drag and drop libraries and noted they are not generic enough to fit within your design?

This library provides Angular 4 directives that enables you to have any html tag drag drop enabled within your component control just by adding **DragDropModule** into your AppModule.

You will be able to pass a medium object to the directives. The medium will supposedly have or know of certain things that can help your code make a decision on allowing a drag or a drop to take place. It could be a reference to a node or a structure in your code. At the start, a "dragEnabled" requst with a DragEvent will be sent to your component. if returned true, dragging begins. At the end of drag operation, an event with the source medium, source HTMLElement, destination medium, and destination HTMLElement will be sent to your component to perform any action necessary.

**NOTE:** Starting with version 1.1.0 this library is compatible with Angular 6+.

**NOTE:** Starting with version 2.0.0 you need to import this library through @sedeh/drag-enabled.

[Comments/Requests](https://github.com/msalehisedeh/drag-enabled/issues) | 
[NPM](https://www.npmjs.com/package/@sedeh/drag-enabled) | 
[Live Demo (drag/drop tags)](https://tagbox.stackblitz.io)
