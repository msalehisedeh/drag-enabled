import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Drag Enabled';

  constructor() {

  }
  
  	dragEnabled(event) {
		return event.medium.dragable;
	}
	dropEnabled(event) {
		return event.destination.medium.dragable;
	}
	onDragStart(event){
	}
	onDragEnd(event){
	}
	onDrop(event){
		// this.swapColumns(event.source.medium, event.source.node, event.destination.medium, event.destination.node);
	}

}
