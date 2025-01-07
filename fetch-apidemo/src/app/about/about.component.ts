import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  itemImageUrl = '/images/utm.png';
  name: string = '';
}
