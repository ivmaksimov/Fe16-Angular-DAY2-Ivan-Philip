import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  
  
})
export class AddComponent implements OnInit {

  addNew = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    price:new FormControl('', Validators.required),
    img:new FormControl('', Validators.required),
  });
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    // to take the values from the form you can select the property that have the formGroup and then just add .value
   
      let newCar = this.addNew.value;

      console.log(newCar)
   
   
    }

}
