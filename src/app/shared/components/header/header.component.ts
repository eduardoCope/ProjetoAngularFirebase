import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  menu = {
    logo:'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokeball-256.png',
    itens: [
        {icone: 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-256.png', texto: 'Inicio'},
        {icone: 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokemon_Go_Locator-256.png', texto: 'Sobre'},
        {icone: 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokedex_tool-256.png', texto: 'Galeria'},
        {icone: 'https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokemon_Trainer_Boy-256.png', texto: 'Contato'}
    ]
  }
  constructor() { }

  ngOnInit() {}

}
