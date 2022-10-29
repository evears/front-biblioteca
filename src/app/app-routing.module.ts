import { EditlibroComponent } from './components/libros/editlibro.component';
import { NewlibroComponent } from './components/libros/newlibro.component';
import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: 'nuevo', component: NewlibroComponent },
  { path: 'editar/:id', component: EditlibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
