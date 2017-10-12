import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ssj3',
  templateUrl: './ssj3.component.html',
  styleUrls: ['./ssj3.component.css']
})
export class Ssj3Component implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 250;
  }

}
