import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Array<{ brand: string, model: string, prodYear:number, img:string, price:number}> = [

    {
 
      brand: "BMW",
      model: "sx",
      prodYear: 1915,
      img:"car1.png",
      price: 22
 
    },{
 
      brand: "Citroen",
      model: "tf",
      prodYear: 1955,
      img:"car2.png",
      price: 26
 
    },{
 
      brand: "Chevrolet",
      model: "fg",
      prodYear: 1995,
      img:"car3.png",
      price: 21
 
    },{
 
      brand: "Porsche",
      model: "gt",
      prodYear: 1969,
      img:"car4.png",
      price: 29
 
    },{
 
      brand: "Ford",
      model: "se",
      prodYear: 1985,
      img:"car5.png",
      price: 27
 
    },{
 
      brand: "Tesla",
      model: "el",
      prodYear: 1915,
      img:"car6.png",
      price: 32
 
    }
 
   ];

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

    
    if (this.addNew.valid) {
      let newCar:any = this.addNew.value;
   
        console.log(newCar);
        this.cars.push(newCar);
    } 
  }

}
