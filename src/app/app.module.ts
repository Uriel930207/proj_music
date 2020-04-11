import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LocalitationComponent } from './componentes/localitation/localitation.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//route
import { APP_ROUTING } from './app.routes';

//api maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalitationComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOg6yqbZJRM7MbJpBAA9mFVNlOD2z6PDk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
