import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Augusto';
  idade: number = 30;
  job = 'Programador';
  carro = {
    nome: 'Lancer',
    cor: 'Azul',
    ano: 2008
  }
  
  constructor() {}

  ngOnInit(): void{
    
  }
}
