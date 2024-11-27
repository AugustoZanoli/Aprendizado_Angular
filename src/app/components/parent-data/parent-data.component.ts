import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name: String = '';
  @Input() userData !: {email: string, role: string, idade: number}; //!: inicia o dado

  constructor(){}
}
