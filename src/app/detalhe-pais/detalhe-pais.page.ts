import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-detalhe-pais',
  templateUrl: './detalhe-pais.page.html',
  styleUrls: ['./detalhe-pais.page.scss'],
})
export class DetalhePaisPage implements OnInit {

  codigo: any;
  paises: any;

  constructor() { }

  ngOnInit() {

    this.codigo = history.state.codigo;
    fetch(`https://restcountries.com/v3.1/alpha/${this.codigo}`)
    .then((dados)=>dados.json())
    .then(dados => {
      this.paises = dados;
      console.log(this.codigo)
    })
    .catch((erro)=>{console.log(erro)})
    .finally(()=> {console.log('Finalizado!')})

  }

  verDetalhes(fronteiras: any){
    fetch(`https://restcountries.com/v3.1/alpha/${fronteiras}`)
    .then((dados)=>dados.json())
    .then(dados => {
      this.paises = dados;
      console.log(this.codigo)
    })
    .catch((erro)=>{console.log(erro)})
    .finally(()=> {console.log('Finalizado!')})
  }

}
