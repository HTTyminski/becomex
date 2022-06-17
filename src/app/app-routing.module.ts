import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCreateComponent } from './components/animal/animal-create/animal-create.component';
import { AnimalDeleteComponent } from './components/animal/animal-delete/animal-delete.component';
import { AnimalUpdateComponent } from './components/animal/animal-update/animal-update.component';
import { AnimalCrudComponent } from './view/animal-crud/animal-crud.component';
import { HomeComponent } from './view/home/home.component';
import { TreeComponent } from './view/tree/tree.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "animals",
    component: AnimalCrudComponent
  },
  {
    path: "tree",
    component: TreeComponent
  },
  {
    path: "animals/update/:id",
    component: AnimalUpdateComponent
  },
  {
    path: "animals/delete/:id",
    component: AnimalDeleteComponent
  },
  {
    path: "animals/create",
    component: AnimalCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
