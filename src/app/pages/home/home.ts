import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { InstrumentoService } from '../../services/instrumento-service';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  instrumentos: any;

  constructor(private instrumentoService: InstrumentoService ){
    this.instrumentos = instrumentoService.getInstrumentos();
  }

  adicionaAoCarrinho(instrumento: string): void{
    console.log(localStorage.getItem("carrinho"))
  } 
}
