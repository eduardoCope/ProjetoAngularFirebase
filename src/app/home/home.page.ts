import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfil = {
    foto: 'https://i.pinimg.com/736x/bf/a9/ad/bfa9ad8ffb16b4bb194893f6e9b308ed.jpg',
    nome: 'Shrek uwu',
    profissao: '50k Onlyfans',
    user: '@onlyShreka',
    idioma: 'Portugues',
    cidade: 'Rio de Janeiro/RJ',
    desde: 'Outubro 2020',
    bio: 'Das telas dos cinemas direto pros sites mais quentes',
    metricas: {
      curtidas: '1M',
      seguidores: '300K',
      amigos: '800'
    },
    postAmgs: [
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwWZhp8fq6vh8_UUA5cPavg8Kpha912_weR07gtiXRXEU44Bp2mWQRA81O_vcvHuB30I&usqp=CAU',
        nome: 'Burro',
        user: '@burroDela',
        post: 'Eu amo minha mulher slk'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04Gfukybv2VO5D1rFXUd2R4fsM4dHfiAVkwMsP_TX76N240WELjOTmg6xb1VRbA93OOQ&usqp=CAU',
        nome: 'Encantado (Taylor`s Version)',
        user: '@encantado',
        post: 'Odeio a Beyonce, Doja Cat, The Weeknd e Rihanna mas n sei dizer o pq'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnl6g0lg-f85aclOqCJyP4fpcZtvnmt-eFgvx2eKrUpyBnB5lFBbnRVEMX5Nu6Rk3Sxw&usqp=CAU',
        nome: 'Rumpelstiltskin',
        user: '@essenomeai',
        post: 'nova plataforma ta pagando muitoooo galera'
      }
    ]
  }

}