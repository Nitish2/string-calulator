import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'string-calculator';
  constructor(){}
  numbers:string='';
  output:number=0;
  ngOnInit(): void {}

  add(str:string){
    let newStr = str.replace(/\D/gi, '')
    const arr = [...newStr];
    if (str.length > 0){
     this.output = this.strToInt(arr);
    } else {
     this.output = 0;
    }
    return this.output;
}
strToInt(arr:any){
  return arr.reduce((acc:any, cur:any) => acc + Number(cur), 0);
}

changeInput(event:any){
 this.output =  event.length === 0 ? 0 :this.output;
}
}
