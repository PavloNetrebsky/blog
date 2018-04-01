import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.styl']
})
export class PostInfoComponent implements OnInit {
  @Input() name: String;
  @Input() date: String;
  @Input() category: String;
  @Input() commentsQuantity: Number;
  
  constructor() { }

  ngOnInit() {
  }

}
