import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipo = [
    {
      nome: 'Fogo',
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
      img2: 'https://blogger.googleusercontent.com/img/a/AVvXsEgkK1gODjjG0fO-wmRKAJXq9_BPcqvkWRTObN3ixKh4gQ-RK0eC-O2MO0sLdpBwuF5Ov75RwAqv3Ia93BxElRd1FAMIoo2jViMi78fWnuAFYu2Kg_dZUJeQ3ViFfuAbPzNaWUCnf39XBY-XLa9Z1omKjf1rBc84yMsHmx9IRB5lwQ2dVMTjMJmsq1AN=s680'
    },
    {
      nome: 'Água',
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png',
      img2: 'https://sm.ign.com/ign_br/screenshot/default/water-pokemon_vnus.jpg'
    },
    {
      nome: 'Grama',
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
      img2: 'https://blogger.googleusercontent.com/img/a/AVvXsEg-SuDuwvd-U1A_pyLBbHXrg_D2dV43tM9Q79MelKbB8KyGrbMSBCHBHbl7Zeho0n0pwkzL7VlDGh7KSMl-OZvxk_VOVblBmuhM4cp-bUeJF9vVLi44Y4CSW2evIaz3_57pIpySeWYwc0IWEsaHU4e9ioQHXz3RQRqidM0WUd5PwZbzD4D_UpZuxUsB=s967'
    },
  ]
 
  constructor(){ }
}
