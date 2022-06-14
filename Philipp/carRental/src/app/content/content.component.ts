import { Component, OnInit } from '@angular/core';
import { Vehicle, vehicles  } from '../classes/myclasses';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  cars = vehicles;

  constructor() { }

  ngOnInit(): void {
  }
  
}
