import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from 'src/app/core/models/pageable';


@Component({
  selector: 'app-search-paginator',
  templateUrl: './search-paginator.component.html',
  styleUrls: ['./search-paginator.component.scss']
})
export class SearchPaginatorComponent {
  @Input() size: number = 0;
  @Output() pageable = new EventEmitter<Pageable>();

  constructor() { }

  onPagingChange(event: any) {
    let pageableSetting: Pageable = {
      page: event.pageIndex,
      amount: event.pageSize
    }
    console.log("page change")
    this.pageable.emit(pageableSetting)
  }
}
