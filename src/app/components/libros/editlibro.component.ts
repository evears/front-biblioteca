import { LibroService } from './../../services/libro.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editlibro',
  templateUrl: './editlibro.component.html',
  styleUrls: ['./editlibro.component.css']
})
export class EditlibroComponent implements OnInit {

  libro: Libro = null;

  constructor(private libroserv: LibroService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.libroserv.detail(id).subscribe({
      next: data => {
        alert("¿Está seguro que desea modificar el libro?");
        this.libro = data;
      }, error: err => {
        alert("Error al seleccionar el libro a modificar");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.libroserv.update(id, this.libro).subscribe({
      next: data => {
        alert("Libro modificado correctamente");
        this.router.navigate(['']);
      }, error: err => {
        alert("Error al modificar el libro");
        this.router.navigate(['']);
      }
    })
  }

}
