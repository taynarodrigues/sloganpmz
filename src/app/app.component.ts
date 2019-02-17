import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    { 
      url: 'http://www.grupopmz.com/wp-content/uploads/2016/09/Centro-de-Distribui%C3%A7%C3%A3o-2.jpg', 
      description: 'Pmz'
    },
    { 
      url: 'http://www.grupopmz.com/wp-content/uploads/2016/09/Centro-de-Distribui%C3%A7%C3%A3o-2.jpg', 
      description: 'Pmz'
    },
    { 
      url: 'http://www.grupopmz.com/wp-content/uploads/2016/09/Centro-de-Distribui%C3%A7%C3%A3o-2.jpg', 
      description: 'Pmz'
    }         
  ];  

}
