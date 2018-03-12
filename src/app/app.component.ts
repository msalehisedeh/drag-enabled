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

}
