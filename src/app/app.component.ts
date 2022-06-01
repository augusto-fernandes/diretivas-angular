import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;

  pessoas =[
    {
      nome: "Augusto",
      sobrenome:"Fernandes"
    },
    {
      nome: "joao",
      sobrenome:"costa"
    },
    {
      nome: "fernando",
      sobrenome:"silva"
    }
  ]
  
  constructor(){ }

  ngOnInit(): void { 
    console.log(this.pessoas);
      let interval = setInterval(() =>{
      this.count++; 
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)   
  }
} 
