import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
