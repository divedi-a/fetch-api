import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addremoveclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addremoveclass.component.html',
  styleUrl: './addremoveclass.component.scss'
})
export class AddremoveclassComponent {
  bggreen: boolean = false;
 

  addClass(){
    this.bggreen = !this.bggreen;
  }

}
