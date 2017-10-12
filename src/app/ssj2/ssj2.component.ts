import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ssj2',
  templateUrl: './ssj2.component.html',
  styleUrls: ['./ssj2.component.css']
})
export class Ssj2Component implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.power = this.power * 150;
  }

}
