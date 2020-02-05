import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroceryFilterlistPage } from './grocery-filterlist.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryFilterlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroceryFilterlistPage]
})
export class GroceryFilterlistPageModule {}
