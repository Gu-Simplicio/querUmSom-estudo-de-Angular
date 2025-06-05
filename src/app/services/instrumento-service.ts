import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {
  private instrumentos: any;

  constructor() {
    this.instrumentos = [
      {
        img: '/assets/img/bateria.png',
        nome: 'Bateria',
        preco: 1500.00,
        descricao: 'Instrumento de percurssão comumente usado em bandas de rock'
      },
      {
        img: '/assets/img/flauta.png',
        nome: 'Flauta',
        preco: 50.00,
        descricao: 'Instrumento de sopro.'
      },
      {
        img: '/assets/img/piano.png',
        nome: 'Piano',
        preco: 2322.50,
        descricao: 'Instrumento muito utilizado desde sempre, um dos mais conhecidos da música'
      },
      {
        img: '/assets/img/violao.png',
        nome: 'Violão',
        preco: 250.99,
        descricao: 'Instrumento de cordas usado pra tudo, de reagge à gospel'
      },
      {
        img: '/assets/img/violino.png',
        nome: 'Violino',
        preco: 2312.02,
        descricao: 'Instrumento chique'
      }
    ];
  }

  getInstrumentos(): any{
      return this.instrumentos;
  }
}
