import { Component, OnInit} from '@angular/core';
import { Vehicle, vehicles  } from '../classes/myclasses';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  protected cars: Array<Vehicle> = vehicles;

  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void { 
    this.cars = this.arrayService.getItems()
    console.log("main init")
    console.log(this.arrayService.getItems())
  }

}