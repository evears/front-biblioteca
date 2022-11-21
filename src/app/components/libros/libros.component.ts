import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private libroserv: LibroService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroserv.list().subscribe(data => { this.libros = data; })
  }

  delete(id?: number) {
    alert("¿Está seguro que desea eliminar el libro?");
    if (id != undefined) {
      this.libroserv.delete(id).subscribe({
        next: data => {
          alert("Libro eliminado exitosamente");
          this.cargarLibros();
        }, error: err => {
          alert("No se puede eliminar el libro");
        }
      })
    }
  }

}
