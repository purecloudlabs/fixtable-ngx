import { OnInit } from '@angular/core';
import { ColumnDef } from '../grid/grid.component';
export declare class ColumnHeaderComponent implements OnInit {
    constructor();
    columnDef: ColumnDef;
    SortByKey: (key: string) => void;
    sortBy: string;
    ascending: boolean;
    SortByMyKey(): void;
    ngOnInit(): void;
}
