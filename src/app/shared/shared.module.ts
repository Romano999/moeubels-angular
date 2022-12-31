import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPaginatorComponent } from './search-paginator/search-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchBarComponent,
    SearchPaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchBarComponent,
    SearchPaginatorComponent,
  ],
})
export class SharedModule { }
