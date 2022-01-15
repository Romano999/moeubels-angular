import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm !: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      "searchTerm": new FormControl(null, null)
    });
  }

  onSearch() {
    this.searchForm.value['searchTerm']
  }

}
