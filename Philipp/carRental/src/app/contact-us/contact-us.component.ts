import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle, vehicles } from '../classes/myclasses';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  formInfo = new FormGroup({
    name: new FormControl("", Validators.required),
    seats: new FormControl("", [Validators.required, Validators.pattern(/\d+/)]),
    km: new FormControl("", [Validators.required, Validators.pattern(/\d+/)]),
    fuel: new FormControl("", Validators.required),
    year: new FormControl("", [Validators.required, Validators.pattern(/\d+/)])
  })

  constructor(
    private arrayService: ArrayService) { }

  ngOnInit(): void {
  }

  getInputValues() {
    if(this.formInfo.valid) {
      if(this.arrayService.getItems().find(ele => ele.name === this.formInfo.value.name )) {
        console.error("Can't add to Array")
      } else {
        this.arrayService.addToArray(
          new Vehicle(
              this.formInfo.value.name!,
              Number(this.formInfo.value.seats!),
              Number(this.formInfo.value.km!),
              this.formInfo.value.fuel!,
              Number(this.formInfo.value.year!)
            )
        )
        window.alert("Car added!")
        console.log(this.arrayService.getItems())
      }
    }
  }
}
