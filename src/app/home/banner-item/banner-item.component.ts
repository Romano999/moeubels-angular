import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imagePath?: string = '';

  constructor() { }

}
