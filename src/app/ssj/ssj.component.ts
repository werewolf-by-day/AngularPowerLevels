import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ssj',
  templateUrl: './ssj.component.html',
  styleUrls: ['./ssj.component.css']
})
export class SsjComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 90;
  }

}
