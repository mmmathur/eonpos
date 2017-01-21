import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SalesReport } from './sales-report';
import { SalesGrid } from './sales-grid';
import { SalesFilters} from './sales-filters';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ SalesReport, SalesGrid, SalesFilters],
  exports:      [ SalesReport ]
})
export class ComponentModule { }
