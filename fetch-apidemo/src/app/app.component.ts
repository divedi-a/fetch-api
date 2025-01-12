import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { AddremoveclassComponent } from './addremoveclass/addremoveclass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,HomeComponent,FooterComponent,HeaderComponent,CommonModule,FormdemoComponent,AddremoveclassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fetch-apidemo';
}
