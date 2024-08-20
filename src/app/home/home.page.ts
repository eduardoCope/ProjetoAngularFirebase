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

  segments: string = 'usuario';

  usuario = [
    {
      nome: 'Jose Emersson',
      idade: '20',
      genero: 'masculino',
      rotina: [
        {
          dia: 'Segunda-feira',
          treinos: [
            'Rosca Direta',
            'Crucifixo',
            'Remada sumo'
          ] 
        },
        {
          dia: 'Quarta-feira',
          treinos: [
            'Rosca Invertida',
            'Crucifixo',
            'Abdominal'
          ] 
        },
        {
          dia: 'Sexta-feira',
          treinos: [
            'Supino Inclinado',
            'Biceps Corda',
            'Hulk invertido'
          ] 
        }
      ]
    },
    {
      nome: 'julia Valadao',
      idade: '17',
      genero: 'feminino',
      rotina: [
        {
          dia: 'Terca-feira',
          treinos: [
            'Prancha',
            'Agachamento',
            'Abdominal'
          ] 
        },
        {
          dia: 'Quinta-feira',
          treinos: [
            'Flexao',
            'Cardio',
            'Agachamento'
          ] 
        },
        {
          dia: 'Sabado',
          treinos: [
            'Supino Inclinado',
            'Abdominal',
            'Cardio'
          ] 
        }
      ]
    }
  ]

constructor(){}

trocar(event: any){
  this.segments = event.detail.value;
}
}