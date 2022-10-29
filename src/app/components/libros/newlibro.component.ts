import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';

@Component({
  selector: 'app-newlibro',
  templateUrl: './newlibro.component.html',
  styleUrls: ['./newlibro.component.css']
})
export class NewlibroComponent implements OnInit {

  nombre: string = '';
  autor: string = '';
  editorial: string = '';
  anio!: number;
  fueLeido!: boolean;
  formato: string = '';

  constructor(private libroserv: LibroService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const libro = new Libro(this.nombre, this.autor, this.editorial, this.anio, this.fueLeido, this.formato);
    this.libroserv.save(libro).subscribe(
      data => {
        alert("Libro agregado a la biblioteca");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar el libro");
        this.router.navigate(['']);
      }
    )
  }

}
