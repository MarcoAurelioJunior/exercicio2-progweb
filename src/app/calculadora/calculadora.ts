import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  somar(): void {
    this.resultado = this.num1 + this.num2;
  }

  subtrair(): void {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }

  dividir(): void {
    this.resultado = this.num1 / this.num2;
  }
}
