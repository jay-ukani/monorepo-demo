import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mono-repo-demo-my-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.css',
})
export class MyLibComponent {

 
  
  clickFun(){
    console.log('Function called!!'); 
       
  }

}
