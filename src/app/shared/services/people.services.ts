import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {firstNmae: 'Augusto', lastName: 'Fernandes', age: '20'},
      {firstNmae: 'Joao', lastName: 'Costa', age: '28'},
      { firstNmae: 'Fernando', lastName: 'Silva', age: '33'},
    ]

    return of(peopleArray);
  }
}
 