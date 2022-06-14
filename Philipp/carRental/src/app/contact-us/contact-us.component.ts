import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle, vehicles } from '../classes/myclasses';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnChanges {

  formInfo = new FormGroup({
    name: new FormControl("", Validators.required),
    seats: new FormControl("", Validators.required),
    km: new FormControl("", Validators.required),
    fuel: new FormControl("", Validators.required),
    year: new FormControl("", Validators.required)
  })

  getInputValues() {
    if(this.formInfo.valid) {
      if(!vehicles.find(ele => ele.name === this.formInfo.value.name )) {
        new Vehicle(
            this.formInfo.value.name!,
            Number(this.formInfo.value.seats!),
            Number(this.formInfo.value.km!),
            this.formInfo.value.fuel!,
            Number(this.formInfo.value.year!)
          )
      console.log(vehicles)
      }
    } else {
      console.error("can't add to vehicles")
      console.log(vehicles)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['vehicles'])
  }
}
