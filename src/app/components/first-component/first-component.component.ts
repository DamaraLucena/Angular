import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  
  //Trabalhando com o TypeScript
  name: string = 'Mateus';
  age: number = 24;
  job: string = 'Desenvolvedora de software';
  hobbies: string[] = ["Estudar", "jogar bola", "ler"];
  car = {
    name: "Polo",
    year: 2019
  } 
  
  constructor() { }

  ngOnInit(): void{

  }
}
