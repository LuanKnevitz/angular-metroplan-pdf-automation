import { Component, OnInit, Input } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
 @Input() btnText!: string;

  getValues(val: any){
    console.log(val)
  }

 constructor() {
    

 }

 ngOnInit(): void{}
}
