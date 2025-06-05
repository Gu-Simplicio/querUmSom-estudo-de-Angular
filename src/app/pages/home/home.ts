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
    let carrinho: string | null = localStorage.getItem("carrinhoQuerUmSom");

    if(carrinho === null){
      localStorage.setItem("carrinhoQuerUmSom", instrumento);
    } else {
      let instruSalvos: Array<string> = carrinho.split(",");

      localStorage.removeItem("querUmSom");

      instruSalvos.push(instrumento);

      let instrumentosParaSalvar: string = "";

      instruSalvos.forEach((instru, i) => {
        i == instruSalvos.length - 1 ? instrumentosParaSalvar += instru : instrumentosParaSalvar += instru + ", ";
      })

      localStorage.setItem("carrinhoQuerUmSom", instrumentosParaSalvar);
    }
  } 
}
