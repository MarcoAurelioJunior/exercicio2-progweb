import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagina-nao-encontrada',
  standalone: false,
  templateUrl: './pagina-nao-encontrada.html',
  styleUrl: './pagina-nao-encontrada.css'
})
export class PaginaNaoEncontrada {
  private router = inject(Router);
  private location = inject(Location);

  voltarHome() {
    this.router.navigate(['/']);
  }

  voltarAnterior() {
    this.location.back();
  }
}
