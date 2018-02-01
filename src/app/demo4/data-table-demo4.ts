import { Component } from '@angular/core';
import { DataTableResource } from '../data-table';
import persons from './data-table-demo4-data';


@Component({
    selector: 'data-table-demo-4',
    providers: [],
    templateUrl: './data-table-demo4.html',
    styleUrls: ['./data-table-demo4.css']
})
export class DataTableDemo4 {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.id);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.id);
    }

    rowTooltip(item) { return item.url; }
}
