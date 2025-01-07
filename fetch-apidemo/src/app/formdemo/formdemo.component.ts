import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-formdemo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formdemo.component.html',
  styleUrl: './formdemo.component.scss'
})
export class FormdemoComponent {
  submittedData: any[] = []; // Array to store submitted data
  onSubmit(data: any):void
  {
 
    this.submittedData.push(data.value); // Add the form data to the array
    console.log(data);
    data.resetForm();

    
 





  }



}
