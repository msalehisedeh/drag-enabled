import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Drag Enabled';
	medium = {
		dragable: true,
		dropable: true
	}
	tableData = {
		headers: [
			{dragable: true, dropable: true, key: 'header1', title: 'First Col'},
			{dragable: true, dropable: true, key: 'header2', title: 'Second Col'}
		],
		rows: [
			{header1: 'x', header2: 'y'},
			{header1: 'a', header2: 'b'}
		]
	}
	getRowContent(row: any, column: string) {
		return row[column];
	}
  	dragEnabled(event: any) {
		return event.medium.dragable;
	}
	dropEnabled(event: any) {
		return event.destination.medium.dropable;
	}
	onDragStart(event: any){
	}
	onDragEnd(event: any){
	}
	onDrop(event: any){
		this.swapColumns(event.source.medium, event.source.node, event.destination.medium, event.destination.node);
	}

	swapColumns(smedium: any, snode: any, dmedium: any, dnode: any) {
		const si = this.tableData.headers.indexOf(smedium);
		const di = this.tableData.headers.indexOf(dmedium);
		this.tableData.headers[si] = this.tableData.headers.splice(di, 1, this.tableData.headers[si])[0];
	}
}
