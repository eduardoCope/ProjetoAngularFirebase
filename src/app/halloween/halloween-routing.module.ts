import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalloweenPage } from './halloween.page';

const routes: Routes = [
  {
    path: '',
    component: HalloweenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalloweenPageRoutingModule {}
