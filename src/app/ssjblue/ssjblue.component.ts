import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ssjblue',
  templateUrl: './ssjblue.component.html',
  styleUrls: ['./ssjblue.component.css']
})
export class SsjblueComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 500;
  }

}
