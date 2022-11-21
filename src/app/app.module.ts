import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { FormsModule } from '@angular/forms';
import { NewlibroComponent } from './components/libros/newlibro.component';
import { EditlibroComponent } from './components/libros/editlibro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    NewlibroComponent,
    EditlibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
