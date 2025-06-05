import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { InstrumentoService } from '../../services/instrumento-service';

@Component({
  selector: 'app-carrinho',
  imports: [Header, Footer],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {
  instrumentosSalvos: string[] = [];

  constructor(private instrumentoService: InstrumentoService){
    let carrinho = localStorage.getItem("carrinhoQuerUmSom");

    if(carrinho != null){
      this.instrumentosSalvos = carrinho.split(",");
    }
  }

  
}
