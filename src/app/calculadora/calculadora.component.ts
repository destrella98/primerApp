import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  operation:string="";
  num1:number=0;
  num2:number=0;
  result:number=0;

  constructor() { }

  append(event:Event):void{
    this.operation= this.operation + (<HTMLInputElement>event.target).value;
  }

  clear():void{
    this.operation="";
  }

  add():void{
    this.result=this.num1+this.num2;
  }

  sub():void{
    this.result=this.num1-this.num2;
  }

  multiply():void{
    this.result=this.num1*this.num2;
  }

  divide():void{
    this.result=this.num1/this.num2;
  }

  equal():void{
    this.result=eval(this.operation);
    this.operation=""+ this.result;

  }

  ngOnInit(): void {
  }

}
