import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, NavbarComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Augusto';
  userData = {
    email: 'augusto@gmail.com',
    role: 'estudante',
    idade: 20,
    carro: ''
  }
  
  title = 'curso_angular';
}
