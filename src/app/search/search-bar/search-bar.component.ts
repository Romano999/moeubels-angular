import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<String>();
  searchForm !: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      "searchTerm": new FormControl(null, null)
    });
  }

  onSearch() {
    this.searchTerm.emit(this.searchForm.value['searchTerm']);
  }

}
