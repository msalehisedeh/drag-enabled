import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Drag Enabled';
	tableData = {
		headers: [
			{dargEnabled: true, dropEnabled: true, key: 'header1', title: 'First Col'},
			{dargEnabled: true, dropEnabled: true, key: 'header2', title: 'Second Col'}
		],
		rows: [
			{header1: 'x', header2: 'y'},
			{header1: 'a', header2: 'b'}
		]
	};
	tableData2 = {
		headers: [
			{dargEnabled: true, dropEnabled: true, key: 'headerx', title: 'hex Col'},
			{dargEnabled: true, dropEnabled: true, key: 'headery', title: 'tex Col'}
		],
		rows: [
			{headerx: 'xx', headery: 'yy'},
			{headerx: 'aa', headery: 'bb'}
		]
	}

	constructor(private renderer:Renderer2) {
    }

	isChecked(event: any, medium: any, key: string) {
		medium[key] = event.target.checked;
	}
	keyup(event: any) {
		const code = event.which;
		if (code === 13) {
		  event.target.click();
		}
	}
	getRowContent(row: any, column: string) {
		return row[column];
	}
	onFloaterStart(event: any){
	}
	onFloaterEnd(event: any){
		this.renderer.setStyle(event.medium, 'left', (event.clientX-event.offset.x)+"px");
		this.renderer.setStyle(event.medium, 'top', (event.clientY-event.offset.y)+"px");
	}
	onFloaterDrag(event: any){
		this.renderer.setStyle(event.medium, 'left', (event.clientX-event.offset.x)+"px");
		this.renderer.setStyle(event.medium, 'top', (event.clientY-event.offset.y)+"px");
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
		const si2 = this.tableData2.headers.indexOf(smedium);
		const di = this.tableData.headers.indexOf(dmedium);
		const di2 = this.tableData2.headers.indexOf(dmedium);
		let source: any, destination: any, i = -1, j = -1;

		if (si > -1) {
			source = this.tableData;
			i = si;
		} else if (si2 > -1){
			source = this.tableData2;
			i = si2;
		}
		if (di > -1) {
			destination = this.tableData;
			j = di;
		} else if (di2 > -1){
			destination = this.tableData2;
			j = di2;
		}
		if (source && destination) {
			source.headers[i] = destination.headers.splice(j, 1, source.headers[i])[0];
			if (source !== destination)
			source.rows.map(
				(row: any, index: number) => {
					const temp = row[smedium.key];
					row[dmedium.key] = destination.rows[index][dmedium.key];
					destination.rows[index][smedium.key] = temp;

					delete row[smedium.key];
					delete destination.rows[index][dmedium.key];
				}
			);
		}
	}
}
