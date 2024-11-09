import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalloweenPageRoutingModule } from './halloween-routing.module';

import { HalloweenPage } from './halloween.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalloweenPageRoutingModule,
    MenuModule,
    FooterModule
  ],
  declarations: [HalloweenPage]
})
export class HalloweenPageModule {}
