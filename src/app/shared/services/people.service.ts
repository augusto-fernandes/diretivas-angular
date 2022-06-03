import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {firstName: 'Augusto', lastName: 'Fernandes', age: '20'},
      {firstName: 'Joao', lastName: 'Costa', age: '28'},
      { firstName: 'Fernando', lastName: 'Silva', age: '33'},
    ]

    return of(peopleArray);
  }
}
 