import { OnInit } from '@angular/core';
export interface ColumnDef {
    key: string;
    header?: string;
    width?: number;
    sortable?: boolean;
    sortCompareMethod?: (a, b) => number;
    hideLabel?: boolean;
    cellClass?: string;
    component?: string;
}
export interface FixtableOptions {
    data: any[];
    columns: ColumnDef[];
    tableClass?: string;
    loading: string;
}
export declare class GridComponent implements OnInit {
    data: any;
    columns: any;
    externalFilter: any;
    options: FixtableOptions;
    constructor();
    private ascending;
    SortByKey: (key: string) => void;
    ngOnInit(): void;
}
