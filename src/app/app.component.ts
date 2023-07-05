import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filas-angular';
  esClaseA = true;
  esClaseB = true;
  
  fecha = new Date ();
}
